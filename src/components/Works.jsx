import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
      className='h-[640px] flex-1 min-w-[280px] max-w-[360px]'
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
          <p className='mt-2 text-secondary text-[14px] leading-[22px] flex-1 overflow-y-auto'>
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
          Production work and personal projects: enterprise platform development
          (CA Cloud Desk), a workflow orchestration platform (FlowGenie), and a
          LeetCode Chrome extension with spoiler-safe AI mentoring. Each card links
          to the live product.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-nowrap gap-7 justify-center items-stretch w-full overflow-x-auto pb-2'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
