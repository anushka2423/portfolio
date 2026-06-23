import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import useCountUp from "../../utils/useCountUp";

const DIFFICULTY_STYLES = {
  Easy: {
    label: "Easy",
    titleClass: "text-teal-400",
    barClass: "from-teal-400 to-cyan-300",
    glowClass: "group-hover:shadow-[0_12px_40px_-12px_rgba(45,212,191,0.55)]",
    borderClass: "from-teal-400/40 to-cyan-300/10",
  },
  Medium: {
    label: "Med.",
    titleClass: "text-amber-400",
    barClass: "from-amber-400 to-yellow-300",
    glowClass: "group-hover:shadow-[0_12px_40px_-12px_rgba(251,191,36,0.55)]",
    borderClass: "from-amber-400/40 to-yellow-300/10",
  },
  Hard: {
    label: "Hard",
    titleClass: "text-rose-400",
    barClass: "from-rose-500 to-pink-400",
    glowClass: "group-hover:shadow-[0_12px_40px_-12px_rgba(251,113,133,0.55)]",
    borderClass: "from-rose-500/40 to-pink-400/10",
  },
};

const DifficultyCard = ({ difficulty, solved, total, index }) => {
  const styles = DIFFICULTY_STYLES[difficulty];
  const percentage = total > 0 ? (solved / total) * 100 : 0;
  const solvedCount = useCountUp(solved, 1.3);
  const percentCount = useCountUp(percentage, 1.5, 1);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.75)}
      className='group w-full'
    >
      <div
        className={`h-full rounded-2xl bg-gradient-to-br ${styles.borderClass} p-[1px] transition-transform duration-300 group-hover:-translate-y-1 ${styles.glowClass}`}
      >
        <div
          ref={solvedCount.ref}
          className='h-full rounded-2xl bg-tertiary/75 backdrop-blur-xl border border-white/5 px-5 py-4 shadow-card'
        >
          <div className='flex items-center justify-between gap-3'>
            <h4 className={`text-[18px] font-bold ${styles.titleClass}`}>
              {styles.label}
            </h4>
            <span className='text-secondary text-[13px] font-medium'>
              {percentCount.value}%
            </span>
          </div>

          <p className='mt-2 text-white text-[22px] font-bold tracking-tight'>
            <span>{solvedCount.value}</span>
            <span className='text-secondary text-[16px] font-medium'>
              {" "}
              / {total}
            </span>
          </p>

          <div
            className='mt-4 h-2 w-full rounded-full bg-black-200/80 overflow-hidden'
            role='progressbar'
            aria-valuenow={Math.round(percentage)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${difficulty} problems solved`}
          >
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${styles.barClass}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DifficultyCard;
