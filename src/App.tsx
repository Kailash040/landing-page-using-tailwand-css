import "./App.css";
import Logo from "../src/assets/images/navbar_image/Logo.svg";
import hero_image from '../src/assets/images/hero_section_image/hero_image.png'
import logo1 from '../src/assets/images/hero_section_image/logo1.png'
import logo2 from '../src/assets/images/hero_section_image/logo2.png'
import logo3 from '../src/assets/images/hero_section_image/logo3.png'
import logo4 from '../src/assets/images/hero_section_image/logo4.png'
import logo5 from '../src/assets/images/hero_section_image/logo5.png'
function App() {
  return (
    <div className="main_page_container">

    <div className="main_container_navbar bg-slate-950">

    <div className=" container mx-auto py-4 px-9">
      <nav className="flex justify-between ">
        <div>
          {" "}
          <img src={Logo} alt="navbar_logo" />
        </div>
        <div className="flex text-[16px] text-white  list-none gap-5">
          <li>
            <a href="/">Home</a>
            </li>
          <li><a href="/">Services</a></li>
          <li> <a href="/">Company</a></li>
          <li><a href="/">Careen</a></li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li><a href="/">Contact US</a></li>
          <li><a href="/">Clone project</a></li>

        </div>
      </nav>
      <header>
        <div className=" flex  justify-between py-12  items-center flex-wrap">
          <div className="left_hero_section text-white w-1/2  ">
          <h1 className="text-[56px] ">Transform Your Idea Into Reality with Finsweet</h1>
            <p className="text-[16px]  py-3" >The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
            <button className="bg-red-500 py-2 px-3  text-[16px] my-4 hover:bg-red-700">Request Quote</button>
          </div>
          <div className="right_hero_section  ">
           <img src={hero_image} className="w-full" alt="her_image" />
          </div>

        </div>
<div className="hero_section_logo_container flex justify-between items-center flex-wrap">
  <div className="hero_section_logo"><p className="text-white font-light   ">Our Clients</p> <p className="text-white font-medium   ">We've Worked with</p></div>
  <div className="hero_section_logo"><img src={logo1} alt="hero_section_logo" /></div>
  <div className="hero_section_logo"><img src={logo2} alt="hero_section_logo" /></div>
  <div className="hero_section_logo"><img src={logo3} alt="hero_section_logo" /></div>
  <div className="hero_section_logo"><img src={logo4} alt="hero_section_logo" /></div>
  <div className="hero_section_logo"><img src={logo5} alt="hero_section_logo" /></div>
</div>
      </header>
    </div>
    </div>
    <div className="about_us container mx-auto py-12 px-9">
<p>ABOUT US</p>
<div className="about_container flex justify-between items-center">
  <div className="about"><p className="text-[48px] font-bold">The company leads entire webdesign process from concept to delivery.</p></div>
  <div className="about"><p className="text-[36px] font-medium ">The Era Of Technology.</p> <p className="text-base  text-gray-600 py-2">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p></div>
</div>
    </div>
    </div>
  );
}

export default App;
