import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[250px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full  object-cover rounded-1xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='white-gradient w-10 h-10  flex justify-center items-center cursor-pointer'
            >
               <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              /> 
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
           <p className='mt-1 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      {/* <Tilt  
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-4 mt-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full  object-cover rounded-1xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=' w-10 h-10  flex justify-center items-center cursor-pointer'
            >
               <img
                src={coursera}
                alt='source code'
                className='w-20 h-2 object-contain'
              /> 
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
           <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt> */}
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}></p>
        <h2 className={`${styles.sectionHeadText} flex justify-center items-center`} id="certifications">Certifications</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl  leading-[30px]'
        >
          
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certificates.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
