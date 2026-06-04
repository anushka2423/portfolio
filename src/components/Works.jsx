import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CARD_WIDTH = 360;
const CARD_GAP = 28;

const ScrollButton = ({ direction, onClick }) => (
  <button
    type='button'
    onClick={onClick}
    aria-label={direction === "left" ? "Scroll projects left" : "Scroll projects right"}
    className='shrink-0 w-12 h-12 rounded-full bg-[#915EFF] hover:bg-[#7c3aed] flex items-center justify-center shadow-lg transition-colors'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='white'
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='w-6 h-6'
    >
      {direction === "left" ? (
        <path d='M15 18l-6-6 6-6' />
      ) : (
        <path d='M9 18l6-6-6-6' />
      )}
    </svg>
  </button>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isCompanyProject = false,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='h-[640px] w-[360px] shrink-0'
    >
      <div className='h-full w-full'>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-3 rounded-2xl !h-full w-full flex flex-col'
        >
          <div
            className='relative w-full h-[230px] shrink-0 cursor-pointer'
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-xl'
            />

            {isCompanyProject && (
              <span className='absolute top-3 left-3 px-3 py-1 rounded-full text-[12px] font-semibold text-white bg-[#915EFF] shadow-lg'>
                Company Project
              </span>
            )}

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className='w-10 h-10 rounded-full flex justify-center items-center'>
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5 flex-1 flex flex-col min-h-0'>
            <h3 className='text-white font-bold text-[24px] leading-tight min-h-[72px] line-clamp-2'>
              {name}
            </h3>
            <p className='mt-2 text-secondary text-[14px] leading-[22px] flex-1 overflow-hidden line-clamp-[10]'>
              {description}
            </p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2 shrink-0 min-h-[72px] content-start'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const scrollRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!scrollRef.current) return;
    const amount = (CARD_WIDTH + CARD_GAP) * (direction === "left" ? -1 : 1);
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex' id="projects">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Production work and personal projects: enterprise HRMS platforms (CA
          Cloud Desk, OZii), a workflow orchestration platform (FlowGenie), and a
          LeetCode Chrome extension with spoiler-safe AI mentoring. Each card links
          to the live product.
        </motion.p>
      </div>

      <div className='mt-20 flex items-center gap-4 w-full'>
        <ScrollButton direction='left' onClick={() => scrollProjects("left")} />

        <div
          ref={scrollRef}
          className='flex flex-nowrap gap-7 flex-1 min-w-0 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth'
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <ScrollButton
          direction='right'
          onClick={() => scrollProjects("right")}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
