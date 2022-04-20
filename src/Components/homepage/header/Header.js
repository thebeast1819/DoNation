import React from 'react';
import image from '../../../assests/main_image.png';
import homeimage from '../../../assests/homeimage.png';
import homeimg from '../../../assests/donation.jpg';
import home4 from '../../../assests/home4.png';


import './header.css';

const Header = () => (
  <div className="header3 section__padding" id="home">
    <div className="header-image3">
      <img src={homeimg} />
    </div>
    <div className="header-content3">
      <h1>No one has ever become poor by giving</h1>
      <p>In such a big world, everyone don't have same comfort and resources.</p>
      <p>So, if you have something in excess, then why not let's donate that. We are here with the same intention to reduce the barrier which is coming in between that.</p>
      <div className="header-content_input3">
      <a href="#feature"><p>Know More</p></a>
      </div>

    </div>
  </div>
);

export default Header;
