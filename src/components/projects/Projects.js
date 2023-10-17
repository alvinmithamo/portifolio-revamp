import React from 'react'
import Title from '../layouts/Title'
import { projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import Link from 'react-dom';
// import { Button } from 'react-scroll';

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
          title="POTS AND PLANTS KENYA"
          des=" The website showcases the various indoor and outdoor pots and plants available for sale and hire. Link: potsandplantskenya.co.ke"
          src={projectFour}
          
          

        />
       
        <ProjectsCard
          title="SNACKBARR E-COMMERCE WEBSITE"
          des=" This is an ecommerce web app that sells and deals with exotic snacks and drinks of all kinds. Link: snackbarr.com"
          src={projectFive}


          />
        <ProjectsCard
        
          title=" WERA JOB PLACEMENT SYSTEM"
          des="The app seeks to bring jobseekers and recruiters to one place. Technologies used are Ruby on rails and React. Link: wera1.vercel.app"
          
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