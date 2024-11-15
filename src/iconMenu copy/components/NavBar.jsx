import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons';
import video1 from "../videos/peoplvid.mp4";
// import menuIcon from '../iconMenu/icons8-menu-50.png';
import "../components/link.css";


const NavBar = () => {
  const [links, setLinks] = useState("Home");

  const handleTogglemenu = () => {
    const mySidebar = document.querySelector('.links');
    //  .style.display = 'block';;
  }
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

      <ul className="links">
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
    
        <ul className="mySideBar">
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
      
        {/* <div className="icons">
        <Icon.Facebook className="fb"/>
        <Icon.Instagram className="ins" />
        <Icon.TwitterX className="twitter"/>
        </div> */}
        <Icon.MenuButtonWide className="mymenu" onClick={()=>handleTogglemenu()} />
        <video src={video1}  autoplay="true" muted="true" loop="true"></video>
         <p className="paraheader"><span className="paraspan">Zeus</span> the perfect restaurant</p>
    </nav>
  
    </>
  );
};

export default NavBar;

/* <Link a to="/"
            // onClick={() => {
            //   setLinks("Home");
            // }}
          >
           Home {/* Home{links === "Home" ? <hr /> : <></>} 
           </a>*/
            