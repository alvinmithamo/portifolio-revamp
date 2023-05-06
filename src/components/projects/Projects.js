import React from 'react'
import Title from '../layouts/Title'
import { projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import Link from 'react-dom';
import { Button } from 'react-scroll';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="ENJOY YOUR TOUR ON MY PORTIFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PROPERTY LISTING APP"
          des=" The app seeks to list all available properties for sale and rent, bridging the gap between the tenants and landlords. I was built using React and Ruby on Rails "
          src={projectFour}
          

        />
        <ProjectsCard
          title="SLEEK RECIPE APP"
          des=" I built this web app as a solution to trying to access recipes of all kinds of dishes. I used an external API (TheMealDB) to achieve this. The app is built using Javascript , HTML5 and CSS"
          src={projectFive}

          />
        <ProjectsCard
        
          title=" WERA JOB PLACEMENT SYSTEM"
          des=" This was my capstone school project where I collaborated with 5 members of my group to bring this awesome software system. The app seeks to bring jobseekers and recruiters to one place. Technologies used are Ruby on rails and React"
          
          src={projectSix}
          
        
        />
        
        {/* <ProjectsCard
          title="ECOMMERCE WEB APP"
          des=" "
          src={projectSeven}
        /> */}
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
        /> */}
      </div>
    </section>
  );
}

export default Projects