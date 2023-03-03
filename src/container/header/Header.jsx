import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.jpeg';
import './header.css';

const Header = () => (
  <div className="trade__header section__padding" id="home">
    <div className="trade__header-content">
      <h1 className="gradient__text">I am Dennis Kipruto <br /> a FULLSTACK  software developer</h1>
      <div className="trade__header-content__input">
        <button type="button">Get Started</button> 
      </div>

      <div className="trade__header-content__people">
        <img src={people} alt=''/>
        <p>Peoples Dreams Made Realities through us.</p>
      </div>
    </div>

    <div className="trade__header-image">
      <img src={ai}  alt=''/>
    </div>
  </div>
);

export default Header;