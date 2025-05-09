import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaHome, FaUser, FaEnvelope, FaGitkraken, FaInstagram, FaGitSquare, FaLinkedin, FaAtom, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const IntroText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Engineer", "Graphic Designer", "UI/UX Enthusiast.", "Photographer", "Videographer", "Student", "Jack of All Trades."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy(); // cleanup on unmount
  }, []);

  return (
    <div className="intro-text">
      <h1>Hi, I'm Sameer</h1>
      <span ref={typedRef} />
      <div className="intro-buttons">
        <a href="#projects" className="intro-btn">View Projects <FaArrowRight /> </a>
        <a href="/resume.pdf" className="intro-btn" target="_blank" rel="noopener noreferrer">
          View Resume <FaPaperPlane />
        </a>
      </div>
    </div>
    
  );
};

export default IntroText;
