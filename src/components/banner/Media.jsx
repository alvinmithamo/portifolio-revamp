import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiReact, SiJavascript, SiRuby, SiRubyonrails, SiBootstrap } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
       
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" >
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiRuby />
            </span>
            <span className="bannerIcon">
              <SiRubyonrails />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media