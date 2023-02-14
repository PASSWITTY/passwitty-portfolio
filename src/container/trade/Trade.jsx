import React from 'react';
import Feature from '../../components/feature/Feature';
import './trade.css';

const Trade = () => (
  <div className="trade__trading section__margin" id="wtrade">
    <div className="trade__trading-feature">
      <Feature title="About Us" text="I am a highly skilled software developer with [number of years] years of experience in creating innovative and efficient software solutions. Proficient in [list programming languages], I have a passion for delivering quality products that meet the needs of clients and end-users. I am committed to staying up-to-date with the latest technologies and industry trends, and I am always seeking new challenges to further develop my skills.
        Experienced in designing, developing, and testing software systems using a variety of programming languages including [list languages]. Committed to delivering high-quality, user-friendly software solutions. Proven track record of success in agile development environments, with experience in the full software development life cycle. Continuously seeking new challenges to expand knowledge and skills." />
    </div>
    <div className="trade__trading-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="trade__trading-container">
      <Feature title="Mobile Dev" text="We build industry class mobile developments dor your everyday business needs." />
      <Feature title="Web Dev" text="Right from your E-commerce needs to advertisement, We will build you a beautiful full responsive and interactive website" />
      <Feature title="Web Design" text="This is where Content Management System Software come into play. Wordpress, Squarespace, Shopify, Joomla amongst others" />
    </div>
  </div>
);

export default Trade;