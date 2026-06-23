import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import useCountUp from "../../utils/useCountUp";

const RING_SIZE = 240;
const STROKE_WIDTH = 14;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CENTER = RING_SIZE / 2;

const describeArc = (startAngle, sweepAngle) => {
  if (sweepAngle <= 0) return "";

  const start = ((startAngle - 90) * Math.PI) / 180;
  const end = ((startAngle + sweepAngle - 90) * Math.PI) / 180;
  const x1 = CENTER + RADIUS * Math.cos(start);
  const y1 = CENTER + RADIUS * Math.sin(start);
  const x2 = CENTER + RADIUS * Math.cos(end);
  const y2 = CENTER + RADIUS * Math.sin(end);
  const largeArc = sweepAngle > 180 ? 1 : 0;

  return `M ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${x2} ${y2}`;
};

const ProgressRing = ({ stats }) => {
  const {
    totalSolved,
    totalQuestions,
    easySolved,
    mediumSolved,
    hardSolved,
  } = stats;

  const solvedCount = useCountUp(totalSolved, 1.6);

  const segments = [
    { count: easySolved, color: "#2dd4bf", glow: "rgba(45, 212, 191, 0.45)" },
    { count: mediumSolved, color: "#fbbf24", glow: "rgba(251, 191, 36, 0.45)" },
    { count: hardSolved, color: "#fb7185", glow: "rgba(251, 113, 133, 0.45)" },
  ];

  let currentAngle = 0;
  const arcs = segments.map((segment) => {
    const sweep =
      totalQuestions > 0 ? (segment.count / totalQuestions) * 360 : 0;
    const arc = {
      ...segment,
      path: describeArc(currentAngle, sweep),
      sweep,
    };
    currentAngle += sweep;
    return arc;
  });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.92 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", duration: 0.9 },
        },
      }}
      className='relative w-full max-w-[320px] mx-auto'
    >
      <div className='green-pink-gradient p-[1px] rounded-3xl shadow-card'>
        <div className='relative rounded-3xl bg-tertiary/80 backdrop-blur-xl border border-white/5 px-6 py-8 overflow-hidden'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#804dee]/20 blur-3xl'
          />

          <div ref={solvedCount.ref} className='relative flex flex-col items-center'>
            <svg
              width={RING_SIZE}
              height={RING_SIZE}
              viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
              role='img'
              aria-label={`${totalSolved} of ${totalQuestions} LeetCode questions solved`}
              className='drop-shadow-[0_0_24px_rgba(128,77,238,0.25)]'
            >
              <defs>
                {arcs.map((arc) => (
                  <filter
                    key={`glow-${arc.color}`}
                    id={`glow-${arc.color.replace("#", "")}`}
                    x='-50%'
                    y='-50%'
                    width='200%'
                    height='200%'
                  >
                    <feGaussianBlur stdDeviation='3' result='blur' />
                    <feMerge>
                      <feMergeNode in='blur' />
                      <feMergeNode in='SourceGraphic' />
                    </feMerge>
                  </filter>
                ))}
              </defs>

              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                fill='none'
                stroke='rgba(255,255,255,0.06)'
                strokeWidth={STROKE_WIDTH}
              />

              {arcs.map((arc, index) =>
                arc.path ? (
                  <motion.path
                    key={arc.color}
                    d={arc.path}
                    fill='none'
                    stroke={arc.color}
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap='round'
                    filter={`url(#glow-${arc.color.replace("#", "")})`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.15 * index,
                      ease: "easeOut",
                    }}
                  />
                ) : null
              )}
            </svg>

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
              <div className='flex items-baseline gap-1'>
                <span className='text-white text-[42px] font-black leading-none'>
                  {solvedCount.value}
                </span>
                <span className='text-secondary text-[18px] font-medium'>
                  /{totalQuestions}
                </span>
              </div>

              <div className='mt-2 flex items-center gap-1.5 text-[#38ef7d]'>
                <CheckCircle2 className='w-4 h-4' aria-hidden='true' />
                <span className='text-white text-[15px] font-semibold'>Solved</span>
              </div>

              <p className='mt-1 text-secondary text-[13px]'>
                {totalSolved} / {totalQuestions} Questions
              </p>
            </div>
          </div>

          <div className='mt-6 space-y-2 text-center'>
            <p className='text-secondary text-[14px]'>
              <span className='text-white font-semibold'>{"Building scalable products with clean architecture 👩‍💻"}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressRing;
