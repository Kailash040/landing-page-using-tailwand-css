import "./App.css";
import Logo from "../src/assets/images/navbar_image/Logo.svg";
import hero_image from '../src/assets/images/hero_section_image/hero_image.png'
function App() {
  return (
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

      </header>
    </div>
    </div>
  );
}

export default App;
