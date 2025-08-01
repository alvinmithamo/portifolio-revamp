import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.","Wordpress Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY SPACE</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Alvin Mithamo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Experienced full-stack developer with a successful track record in website & software development. I possess the skills and enthusiasm to develop attractive, expandable web applications. 
        I have experience creating scalable web apps that satisfy users ranging from small to large-scale. Don't settle for less when you can work with the best! 
        </p>
      </div>
     {/* Media */}
     <Media />
     {/* <button>Download CV</button> */}
     <a href="https://alvinnganga.tiiny.site" target="_blank" class="bg-blue-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-700 inline-flex items-center justify-center">Download CV</a>

    </div>
  );
}

export default LeftBanner