import React from "react";

import { Link } from "react-router-dom";
import "../../styles/footer.scss";



const Footer = () => {
  
 
  return (
    <footer className="footer">
      <div className="container">
     <div className="footer-flex">
      <div className="link">
       <ul>
        <li><Link to={'home'} className="footer-links">home</Link></li>
        <li><Link to={'home'} className="footer-links">About</Link></li>
        <li><Link to={'home'} className="footer-links">Why Estate planning</Link></li>
        <li><Link to={'home'} className="footer-links">Our Service</Link></li>
        <li><Link to={'home'} className="footer-links">News</Link></li>
       </ul>
      </div>
      <div className="link">
      <div className="link">
       <ul>
        <li><Link to={'home'} className="footer-links">Contact us</Link></li>
        <li><Link to={'home'} className="footer-links">Download</Link></li>
        <li><Link to={'home'} className="footer-links">FAQ</Link></li>
        <li><Link to={'home'} className="footer-links">Term And Conditions</Link></li>
        <li><Link to={'home'} className="footer-links">Privacy Policy</Link></li>
       </ul>
      </div>
      </div>
      <div className="link">
      <ul>
        <li><Link to={'home'} className="footer-links">Office hour</Link></li>
        <li><Link to={'home'} className="footer-links">Monday - Thursday</Link></li>
        <li><Link to={'home'} className="footer-links">Friday</Link></li>
                <li><Link to={'home'} className="footer-links">9:30 -10:30</Link></li>
       </ul>
      </div>
      <div className="link">
      <ul>
        <form action="">
        <li><p className="footer-links">Signup For News</p></li>
        <li><input type="text"className="footer-input" id="name" name="fname" placeholder="Enter Youre Email"/></li>
        <li className="terms"><input type="checkbox"className="term-input"id="ch1" name="check"/>
       <label htmlFor="ch1"> I agree to the Terms & Conditions</label></li>
                <li><button className="btn-submit">submit</button></li></form>
       </ul>
      </div>
      
     </div>
          </div>
      
    </footer>
  );
};

export default Footer;
