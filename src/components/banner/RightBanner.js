import React from 'react'
import { profile1 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-500 lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
       src={profile1}
        alt=""
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner