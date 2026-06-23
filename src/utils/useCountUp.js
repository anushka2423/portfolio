import { useEffect, useRef, useState } from "react";

const useCountUp = (end, duration = 1.4, decimals = 0) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (end === 0) {
      setValue(0);
      return;
    }

    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = eased * end;

      setValue(
        decimals > 0
          ? Number(nextValue.toFixed(decimals))
          : Math.round(nextValue)
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [end, duration, decimals, isInView]);

  return { ref, value, isInView };
};

export default useCountUp;
