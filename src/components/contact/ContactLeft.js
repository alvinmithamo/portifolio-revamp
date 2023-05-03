import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLocationArrow, FaSearchLocation, FaLinkedin, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Alvin Mithamo</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
         Location:<span className="text-lightText">Nairobi, Kenya</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254-706-824-750</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">alvinmithamo1@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href='https://wa.me/+254706824750' target="_blank">
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
          </a>
          <a href="https://twitter.com/alvoh_m" target="_blank">
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/alvin-mithamo-b90030203/" target="_blank">
          <span className="bannerIcon">
            <FaLinkedinIn/>
          </span>
          </a>
          <a href="https://github.com/alvinsleek/">
            <span className="bannerIcon">
              <FaGithub/>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft