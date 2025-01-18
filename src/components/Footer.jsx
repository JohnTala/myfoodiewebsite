import "../components/footer.css";
import { zeusChefs } from "./chefs";
import { useState } from "react";
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [chefs] = useState(zeusChefs);

  return (
    <>
        <h1>Kitchen Staff</h1>
          <div className="team">
              {chefs.map((kictchen) => (
                  <div key={kictchen.id} id="kitchenstaff">
                     <img src={kictchen.img} alt="picture here" id="myStaffpic" />
                      <h3 className="myparakit">{kictchen.name}</h3>
                      <p className="parakit">{kictchen.role}</p>
                    <p className="myIcon">
                      <a href="http://www.facebook.com" className="fb"><FaFacebook /></a>
                      <a href="http://www.instagram.com" className="ins"><FaInstagram /></a>
                      <a href="http://www.twitter.com" className="twitter"><FaTwitter/></a>
                  </p>
                </div>
              ))}
         </div>
    </>
  );
};

export default Footer;
