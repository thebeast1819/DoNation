import React from 'react';
import Card from '../card/Card';
import buy_sell from '../../../assests/buy_sell.png';
import requirement from '../../../assests/requirement.png';
import lostfound1 from '../../../assests/lostfound1.jpg';
import buyonline from '../../../assests/buyonline.jpg';
import rquire1 from '../../../assests/rquire1.jpg';



import './feature.css';

const Feature = () => (
  <div className="feature3 section__padding" id="feature">
    <div className="feature-heading3">
      <h1>Features</h1>
    </div>
      <div className="feature-container_cards3">
        <Card imgUrl={lostfound1} text="Donate" />
        <Card imgUrl={buyonline} text="Volunteer" />
        <Card imgUrl={rquire1} text="Requirement" />
      </div>
  </div>
);
export default Feature;
