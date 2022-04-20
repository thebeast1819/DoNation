import React from 'react';
import motive_image from '../../../assests/motive.png';
import './motive.css';

const Motive = () => (
  <div style={{width:"100%"}}>
  <div className="motive3" id="motive">
    <div className="motive-content3">
      <h1>Our Motive</h1>
      <p>Our motive is to accomplish a substantial social benefit for some portion of the public. We are here with an intention of reducing the barrier between a donor and acceptor.</p>
      <p>So if you are a person in need then don't worry, you are at right place where you can get a lot of donated goods.</p>
    </div>
    <div className="motive-image3">
      <img src={motive_image} />
    </div>
  </div>
  </div>
);

export default Motive;
