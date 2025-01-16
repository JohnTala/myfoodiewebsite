
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import video1 from "../videos/peoplvid.mp4";
import "../components/link.css";
import useClickOutSide from "./useClickOutSide";
import { useRef } from "react";


const NavBar = () => {

  const myRef = useRef();

  const handleOpenMenu = () => {
    const mySidebar = document.querySelector('#mySideBar');
     mySidebar.style.display = 'flex';
  }

  const handleCloseMenu = () => {
    const mySidebar = document.querySelector('#mySideBar');
     mySidebar.style.display = 'none';
  }

  useClickOutSide(myRef, () => handleCloseMenu());

  return (
    <>
       <nav className="navbar">
        <div className="headnav">
          <h1 className="headZeus">
            Zeus Restos
          </h1>
          <p>
            <FaCocktail className="coctailIcon" />
          </p>
        </div>

         <ul id="mySideBar" ref={myRef}>
          <li onClick={() => handleCloseMenu()}  >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            < Link to="/reviews">Reviews</Link>
          </li>
        </ul>
    
        <ul className="links">
        
          <li className="hideOnMobile">
            <Link to="/">Home</Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/about">About</Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hideOnMobile">
            < Link to="/reviews">Reviews</Link>
          </li>
          <li className="openMenu" onClick={() => handleOpenMenu()} >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
          </li>
        </ul>
        <video src={video1} autoplay="true" muted="true" loop="true"></video>
        <p id="paraheader"><span className="paraspan">Zeus</span> the perfect restaurant</p>
      </nav>
  
    </>
  );
};

export default NavBar;

