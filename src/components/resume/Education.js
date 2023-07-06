import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Business Computing"
            subTitle="Jomo Kenyatta University of Agriculture and Technology "
            result="2020 - Present"
            des="The course equips me with knowledge about the use of technology in the business world. It covers various topics such as computer hardware and software, database management, web design, programming, and networking."
          />
          <ResumeCard
            title="Certificate in Software Engineering"
            subTitle="Moringa School Bootcamp"
            result="Nov 2022 - May 2023"
            des="The bootcamp equipped me with knowledge on how to develop software systems that are efficient, reliable, and scalable as well as understanding the software development lifecycle and the different stages involved in creating a software system."
          />
          
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="Wordpress Developer"
            subTitle="Obo Technologies - (2021 - 2022)"
            result="KENYA"
            des="I got a chance to be part of the company where I built and maintained various corporates websites using Content Management Systems(CMS) such as Wordpress."
          /> */}
          <ResumeCard
            title="Software Developer Intern"
            subTitle="Value Chain Factory"
            result="May 2023 - Present"
            des="I get to be part of the team in building software systems as well as conduct unit testing on them."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Freelance"
            result="Dec 2022 - Apr 2023"
            des="I get hired on contract-terms as a freelancer where i get to be part of various teams in building scalable software systems."
          />
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education