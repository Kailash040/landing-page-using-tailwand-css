import React from 'react'

import Vector from  "../assets/Vector.png"
import { ArrowRight } from 'lucide-react';
import logo from  '../assets/logo.png'
const Home = () => {
  return (
    <>
    <div className='flex justify-center bg-blue-500 text-gray-50 font-semibold gap-[12px] py-[9px] items-center'>  <img src={Vector} className='w-[24px] h-[24px]' alt="" />
        <p className='discount_para'>30% off storewide — Limited time! </p>     <p className='border-b-2 border-gray-50'>Shop Now  </p> 
    </div>
    <div className="navbar flex justify-evenly py-4 items-center">
      
      <div className="left_nav_section"> <img src={logo} alt="" /></div>
      <div className="center_nav_section list-none flex gap-10 text-[14px] font-sans">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">
          Contact Us</a></li>     
         </div>
      <div className="right_nav_section list-none flex gap-4 items-center">
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a></li>
         <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a></li>
<path d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round"/>
</svg></a></li>
<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round"/>
</svg></a></li>
<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<circle cx="10" cy="10" r="10" fill="#141718"/>
</svg></a></li>
</div>


    </div>
    </>
  )
}

export default Home
