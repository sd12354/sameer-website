import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const IntroText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Engineer.", "React Developer.", "UI/UX Enthusiast."],
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
        <a href="#projects" className="intro-btn">View Projects</a>
        <a href="/resume.pdf" className="intro-btn" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
    
  );
};

export default IntroText;
