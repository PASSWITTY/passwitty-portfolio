import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="trade__possibility section__padding" id="possibility">
    <div className="trade__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="trade__possibility-content">
      <h4>The WEB 3.0</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Also known as the Semantic Web, Web 3.0 is the next generation of the internet that is currently under development. It is a more intelligent and connected web that will be decentralized, open, and focused on privacy, security, and user control. It will be based on technologies such as blockchain, artificial intelligence, and the Internet of Things (IoT), and will enable new types of applications and services that are not possible with the current web infrastructure. Web 3.0 aims to provide more personalized and relevant content, improved search capabilities, more secure and transparent transactions, and greater control over personal data.</p>
      <h4>Lets talk about the decentralized systems of the future</h4>
    </div>
  </div>
);

export default Possibility;