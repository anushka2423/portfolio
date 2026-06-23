import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { getProblemUrl } from "../../data/leetcode";
import { fadeIn } from "../../utils/motion";

const RecentProblems = ({ problems }) => {
  if (!problems?.length) {
    return (
      <p className='text-secondary text-[15px] text-center py-6'>
        No recent accepted solutions found.
      </p>
    );
  }

  return (
    <ul className='space-y-3' aria-label='Latest accepted LeetCode solutions'>
      {problems.map((problem, index) => (
        <motion.li
          key={problem.id ?? problem.titleSlug}
          variants={fadeIn("up", "spring", index * 0.08, 0.65)}
        >
          <a
            href={getProblemUrl(problem.titleSlug)}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-between gap-4 rounded-xl bg-black-100/60 backdrop-blur-md border border-white/5 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#804dee]/40 hover:bg-[#1d1836]/90 hover:shadow-[0_10px_30px_-15px_rgba(128,77,238,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#804dee] focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
          >
            <span className='text-white text-[15px] sm:text-[16px] font-medium group-hover:text-[#dfd9ff] transition-colors'>
              {problem.title}
            </span>

            <ExternalLink
              className='w-4 h-4 shrink-0 text-secondary transition-all duration-300 group-hover:text-[#00cea8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              aria-hidden='true'
            />
            <span className='sr-only'>
              Open {problem.title} on LeetCode in a new tab
            </span>
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default RecentProblems;
