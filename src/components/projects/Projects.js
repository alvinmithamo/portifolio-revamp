import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, projectEleven, projectTwelve, projectThirteen, projectFourteen } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-dom';



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
              title="NJERAE"
              des="This is a music artist portfolio website which portrays what she does in the music industry. "
              src={projectTen}
              link="https://njerae.vercel.app/"
          />

        <ProjectsCard
          title="DENIS MOROGA & ASSOCIATES ADVOCATES "
          des=" This is a law firm website which serves as their portfolio, showcasing the various legal services they offer."
          src={projectFive}
          link="https://morogalaw.com"

          />

        <ProjectsCard
         
          title="DRINKSASA"
          des="This is an ecommerce website that sells alcohol and other drinks online and makes deliveries."
          src={projectSeven}
          link="https://drinksasa.com"
        />


        <ProjectsCard
          title="SPEEDEX INTERIORS"
          des=" The website is an interior design website which specializes in advanced 3D Product Rendering Services."
          src={projectFour}
          link="https://spinteriors.speedexmarketing.co.ke/"
          />
         
        
        <ProjectsCard
        
          title=" WERA JOB PLACEMENT SYSTEM"
          des="The app seeks to bring jobseekers and recruiters to one place. Technologies used are Ruby on rails and React."
          
          src={projectSix}
          link="https://wera1.vercel.app"
        
        />

      
        <ProjectsCard
          title="JEREMYMKAY ASSOCIATES"
          des="Jeremy Mkay Associates specializes in advisory, audit & assurance and tax services to privately held businesses, clubs and NGOs."
          src={projectOne}
          link="https://jeremymkay.co.ke"
        />
        
        <ProjectsCard
          title="SLEEK RENTALS"
          des="This is a car renting website that users can book vehicles of their choice for rent."
          src={projectEight}
          link="https://sleek-rentals.vercel.app"
        />

        <ProjectsCard
          title="SHIRINI EXP"
          des="This is an agency website that mainly offers services in experiential marketing and communication"
          src={projectNine}
          link="https://shirini.co.ke/"
        />

        
        <ProjectsCard
          title="MOUNT KENYA WILDLIFE ESTATE"
          des="This is a website for a luxurious hotel in the Mount Kenya region which offers accommodation for its clientele; both long-term and short term.  "
          src={projectEleven}
          link="https://mountkenyawe.co.ke/"
        />

        <ProjectsCard
          title="BADOM CLEANERS"
          des="This is a website for a cleaning company which showcases the services they offer as well as users can book appointments for their services. "
          src={projectTwelve}
          link="https://badomcleaners.co.ke/"
        />

        <ProjectsCard
          title="KOMRADES"
          des="This is a website for a pioneering company which empowers women through financial strength, well-being, and community.  "
          src={projectThirteen}
          link="https://komrades.co.ke/"
        />

        <ProjectsCard
          title="TIMELESS LUXURY"
          des="This is a website for a real estate company which redifines luxury living through real estate and interior design.  "
          src={projectFourteen}
          link="https://timelessluxury.co.ke/"
        />
      </div>
    </section>
  );
}

export default Projects