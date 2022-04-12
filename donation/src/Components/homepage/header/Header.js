import React from 'react';
import homeimg from '../../../assests/mainimg.jpg';


import './header.css';

const Header = () => (
  <div className="header3 section__padding" id="home">
    <div className="header-image3">
      <img src={homeimg} />
    </div>
    <div className="header-content3">
      <h1>dsfgbsdgfsdfdfgh</h1>
      <p>fjhfjfyjjjjjjj</p>
      <p>dsgshgfjgjg</p>
      <div className="header-content_input3">
      <a href="#feature"><p>Know More</p></a>
      </div>

    </div>
  </div>
);

export default Header;
