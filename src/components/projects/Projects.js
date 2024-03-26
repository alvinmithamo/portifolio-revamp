import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectFour, projectFive, projectSix, projectSeven, projectEight } from "../../assets/index";
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
          des=" The website showcases the various indoor and outdoor pots and plants available for sale and hire.
           Link: potsandplantskenya.co.ke"
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
     
        <ProjectsCard
         
          title="DRINKSASA"
          des="This is an ecommerce website that sells alcohol and other drinks online and makes deliveries. Link:drinksasa.com"
          src={projectSeven}
        />
      
        <ProjectsCard
          title="MELCO INSURANCE"
          des="This is a static website for an insurance agency, showcasing the various services and insurance packages they offer. Link: melcoinsurance.com"
          src={projectOne}
        />
        
        <ProjectsCard
          title="SLEEK RENTALS"
          des="This is a car renting website that users can book vehicles of their choice for rent. link: sleek-rentals.vercel.app"
          src={projectEight}
        />
      </div>
    </section>
  );
}

export default Projects