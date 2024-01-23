// import React from "react";
import hero from "../assets/hero.png";
import tranding_logo1 from "../assets/tranding_logo1.png";
import tranding_logo2 from "../assets/tranding_logo2.png";
import tranding_logo3 from "../assets/tranding_logo3.png";

const Hero = () => {
  return (
    <>
      <div className="hero_section flex justify-center items-center flex-wrap lg:gap-16 bg-gray-900 text-gray-50 sm:gap-12 ">
        <div className="hero_img_container ">
          <img src={hero} alt="" />
        </div>
        <div className="hero_para_container">
          <p className="  font-poppins  	lg:text-[72px] sm:text-[40px] leading-8">
            Bring the{" "}
          </p>
          <p className="  font-poppins  lg:text-[72px] sm:text-[40px]">
            warmth.
          </p>
          <p className="lg:text-xl font-inter font-normal sm:text-base mt-4		">
            Everyone needs a good winter jacket.
          </p>
          <p className="lg:text-xl font-inter font-normal sm:text-base">
            Find yours with our collection and more.
          </p>
          <button className="font-inter py-3 px-12 bg-blue-500 rounded-lg my-7  text-sm  lg:text-base">
            Shopping Now
          </button>
        </div>
      </div>
      <div className="tranding_brands">
        <p className="font-xl  font-inter font-semibold	 text-center mt-10 mb-4">
          Trending Brands
        </p>
        <div className="tranding_brand_logo list-none flex gap-6 justify-center flex-wrap">
          <li>
            <a href="#">
              <img src={tranding_logo1} alt="" className="w-[160px]	h-[64px]	" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tranding_logo2} alt="" className="w-[160px]	h-[64px]	" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tranding_logo3} alt="" className="w-[160px]	h-[64px]	" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tranding_logo1} alt=""  className="w-[160px]	h-[64px]	"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tranding_logo2} alt=""  className="w-[160px]	h-[64px]	"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tranding_logo3} alt="" className="w-[160px]	h-[64px]	" />
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Hero;
