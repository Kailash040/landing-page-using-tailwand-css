import React from "react";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="hero_section flex justify-center items-center lg:gap-16 bg-gray-900 text-gray-50">
      <div className="hero_img_container ">
        <img src={hero} alt="" />
      </div>
      <div className="hero_para_container ">
        <p className="text-[72px] font-poppins leading-10">Bring the </p>
        <p className="text-[72px] font-poppins">warmth</p>
        <p className="text-xl font-inter font-normal">
          Everyone needs a good winter jacket.
        </p>
        <p className="text-xl font-inter font-normal">
          Find yours with our collection and more.
        </p>
        <button className="font-inter text-lg py-3 px-12 bg-blue-500 rounded-lg my-7">
          Shopping Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
