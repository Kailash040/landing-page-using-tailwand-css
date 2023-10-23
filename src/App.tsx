import "./App.css";
import Logo from "../src/assets/images/navbar_image/Logo.svg";
function App() {
  return (
    <div className="main_container_navbar bg-slate-950">

    <div className="container mx-auto py-4">
      <nav className="flex justify-between ">
        <div>
          {" "}
          <img src={Logo} alt="navbar_logo" />
        </div>
        <div className="flex text-[16px] text-white  list-none gap-5">
          <li>
            <a href="">Home</a>
            </li>
          <li><a href="">Services</a></li>
          <li> <a href="">Company</a></li>
          <li><a href="">Careen</a></li>
          <li>
            <a href="">Blog</a>
          </li>
          <li><a href="">Contact US</a></li>
          <li><a href="">Clone project</a></li>

        </div>
      </nav>
    </div>
    </div>
  );
}

export default App;
