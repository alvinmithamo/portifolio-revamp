import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
// import Experience from "./Experience"

const Resume = () => {
  const [skillData, setSkillData] = useState(false);
   const [educationData, setEducationData] = useState(true);
   
  //  const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black mx-auto">
      <div className="flex justify-center items-center text-center">
        <Title title="TAKE A LOOK..." des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setSkillData(true)&
              setEducationData(false) &
               
              // setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              // setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education & Experience
          </li>
          
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              // setExperienceData(true) &
              setAchievementData(false)
            }
            // className={`${
            //   experienceData
            //     ? "border-designColor rounded-lg"
            //     : "border-transparent"
            // } resumeLi`}
          >
            Experience
          </li> */}
          <li
            onClick={() =>
              
              setSkillData(false) &
              setEducationData(false) &
              // setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      
      {skillData && <Skills />}
      {educationData && <Education />}
      {achievementData && <Achievement />}
      {/* {experienceData && <Experience />} */}
 
    </section>
  );
}

export default Resume