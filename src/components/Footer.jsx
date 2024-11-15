import "../components/footer.css";
import { zeusChefs } from "./chefs";
import { useState } from "react";
import { FaCocktail } from "react-icons/fa";
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [chefs, setChefs] = useState(zeusChefs);

  return (
    <>
        
        <h2>Team</h2>
          <div className="team">
            
              {chefs.map((kictchen) => (
                  <div key={kictchen.id} id="kitchenstaff">
                  <img src={kictchen.img} alt="picture here" id="myStaffpic" />
                      <h3 className="myparakit">{kictchen.name}</h3>
                  <p className="parakit">{kictchen.role}</p>
                  <p className="myIcon"><FaFacebook className="fb"/>  <FaInstagram className="ins" />  <FaTwitter className="twitter"/></p>
                </div>
              ))}
         </div>
      <hr className="myHoz"></hr>
      
      <div className="footerdiv">
        <div className="footzeus">
        <h4> Zeus Restos</h4>
        <p><FaCocktail /></p>
        </div>
          <p className="para"> &copy; All copyrights reserved</p>
      </div>
    </>
  );
};

export default Footer;
