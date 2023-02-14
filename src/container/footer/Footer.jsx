import React from 'react';
import tradeLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="trade__footer section__padding">
   
    <div className="trade__footer-links">
      <div className="trade__footer-links_logo">
        <img src={tradeLogo} alt="trade_logo" />
        <p>2143 Granti Road Kenya, <br /> All Rights Reserved</p>
      </div>
      <div className="trade__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="trade__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="trade__footer-links_div">
        <h4>Get in touch</h4>
        <p>2143 Granti Road Kenya</p>
        <p>254746126281</p>
        <p>passwitty@gmail.com</p>
      </div>
    </div>

    <div className="trade__footer-copyright">
      <p>@2022 PASSWITTY. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;