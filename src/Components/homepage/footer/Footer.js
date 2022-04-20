import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer3 section__padding" id="footer">
    <div className="footer-links3">
      <div className="footer-links_div3">
        <h2>Team</h2>
        <p><a href="https://www.linkedin.com/in/aman-vaishya-32456a1b8/" target="_blank">Aman Vaishya</a></p>
        <p><a href="#" target="_blank">Sahil Mittal</a></p>
        <p><a href="#" target="_blank">Mandeep Mallik</a></p>
      </div>
      <div className="footer-links_div3">
        <h2>Company</h2>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-links_div3">
        <h2>Get in touch</h2>
        <p>donation.app@gmail.com</p>
        <p>1234567890</p>
        <p>1800 200 100</p>
      </div>
    </div>

    <div className="footer-copyright3">
      <p>@2022 DoNation</p>
      <p>All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
