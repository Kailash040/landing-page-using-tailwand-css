import "./App.css";
import Logo from "../src/assets/images/navbar_image/Logo.svg";
function App() {
  return (
    <div className="main_container_navbar bg-slate-950">

    <div className="container mx-auto py-4">
      <nav className="flex justify-between">
        <div>
          {" "}
          <img src={Logo} alt="navbar_logo" />
        </div>
        <div className="flex text-lg text-white  list-none gap-5">
          <li>Home</li>
          <li>Services</li>
          <li> Company</li>
          <li>Careen</li>
          <li>Blog</li>
          <li>Contact US</li>
          <li>Clone project</li>

        </div>
      </nav>
    </div>
    </div>
  );
}

export default App;
