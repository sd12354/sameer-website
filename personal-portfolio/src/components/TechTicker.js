import React from 'react';
import {
  FaJira,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaBehance,
} from 'react-icons/fa';
import { SiAdobe, SiAmazonwebservices } from 'react-icons/si';
import { GiBasketballBall } from 'react-icons/gi';
import './TechTicker.css';

const TechTicker = () => {
  const icons = [
    <FaHtml5 key="html5" />,
    <FaCss3Alt key="css3" />,
    <FaJs key="js" />,
    <FaReact key="react" />,
    <FaPython key="python" />,
    <FaJava key="java" />,
    <FaJira key="jira" />,
    <FaBehance key="behance" />,
    <SiAdobe key="adobe" />,
    <SiAmazonwebservices key="aws" />,
  ];

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        {[...Array(2)].map((_, i) => (
          <div className="ticker-group" key={i}>
            {icons.map((icon, idx) => (
              <span className="ticker-icon" key={idx}>
                {icon}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
