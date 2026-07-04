import { motion } from "framer-motion";
import { AlertCircle, ExternalLink, Loader2 } from "lucide-react";

import { getProfileUrl } from "../../data/leetcode";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import useLeetCodeData from "../../hooks/useLeetCodeData";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import DifficultyCard from "./DifficultyCard";
import ProgressRing from "./ProgressRing";
import RecentProblems from "./RecentProblems";

const LeetCodeSkeleton = () => (
  <div className='animate-pulse space-y-8' aria-hidden='true'>
    <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] gap-8 items-start'>
      <div className='h-[360px] rounded-3xl bg-tertiary/60' />
      <div className='space-y-4'>
        <div className='h-[108px] rounded-2xl bg-tertiary/60' />
        <div className='h-[108px] rounded-2xl bg-tertiary/60' />
        <div className='h-[108px] rounded-2xl bg-tertiary/60' />
      </div>
    </div>
    <div className='h-[280px] rounded-3xl bg-tertiary/60' />
  </div>
);

const LeetCodeContent = () => {
  const { stats, recentProblems, loading, error } = useLeetCodeData();

  if (loading) {
    return (
      <div className='flex flex-col items-center gap-4'>
        <Loader2 className='w-8 h-8 text-[#804dee] animate-spin' aria-hidden='true' />
        <LeetCodeSkeleton />
        <p className='sr-only'>Loading LeetCode journey data</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className='rounded-2xl border border-rose-500/30 bg-tertiary/70 backdrop-blur-md px-6 py-8 flex items-start gap-3'
        role='alert'
      >
        <AlertCircle className='w-5 h-5 text-rose-400 shrink-0 mt-0.5' aria-hidden='true' />
        <div>
          <p className='text-white font-semibold'>Unable to load LeetCode stats</p>
          <p className='text-secondary text-[15px] mt-1'>
            {error ?? "Please try again later."}
          </p>
        </div>
      </motion.div>
    );
  }

  const difficultyCards = [
    { difficulty: "Easy", solved: stats.easySolved, total: stats.easyTotal },
    {
      difficulty: "Medium",
      solved: stats.mediumSolved,
      total: stats.mediumTotal,
    },
    { difficulty: "Hard", solved: stats.hardSolved, total: stats.hardTotal },
  ];

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Problem Solving</p>
        <div className='flex items-center gap-3'>
          <a
            href={getProfileUrl()}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='View LeetCode profile'
            className='group flex items-center justify-center rounded-full p-1.5 text-secondary transition-all duration-300 hover:text-[#00cea8] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#804dee] focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
          >
            <ExternalLink
              className='w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110'
              aria-hidden='true'
            />
          </a>
          <h2 className={styles.sectionHeadText}>LeetCode Journey.</h2>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {stats.totalSolved} problems solved across Easy, Medium, and Hard.
      </motion.p>

      <div className='mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] gap-8 xl:gap-10 items-start'>
        <ProgressRing stats={stats} />

        <div className='flex flex-col gap-4 w-full'>
          {difficultyCards.map((card, index) => (
            <DifficultyCard key={card.difficulty} index={index} {...card} />
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.8)}
        className='mt-10 green-pink-gradient p-[1px] rounded-3xl shadow-card'
      >
        <div className='rounded-3xl bg-tertiary/75 backdrop-blur-xl border border-white/5 px-5 sm:px-8 py-7'>
          <h3 className='text-white text-[22px] sm:text-[24px] font-bold mb-6'>
            Latest Solved Solutions
          </h3>
          <RecentProblems problems={recentProblems} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(LeetCodeContent, "leetcode");
