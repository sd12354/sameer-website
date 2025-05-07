import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import IntroText from '../components/IntroText';
import TechTicker from '../components/TechTicker';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <>
    <CustomCursor />
      <div className="home-container">
        <div className="headshot-orbit-wrapper">
          <motion.div
            className="headshot-card"
            initial={{ scale: 1, rotate: 0, boxShadow: "none" }}
            animate={{ scale: 1, rotate: 0, boxShadow: "none" }}
            whileHover={{
              scale: 1.05,
              rotate: -1.5,
              boxShadow: "0 0 25px #ff69b4"
            }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: "easeInOut"
            }}
          >
            <img src="/headshot.png" alt="Sameer Dhanda" className="headshot" />
            <h1>Sameer Dhanda</h1>
            <h2>Computer Science Major</h2>
            <h3>Incoming <span>@NBA</span></h3>
          </motion.div>
        </div>
        <IntroText />
        <TechTicker />
      </div>
    </>
  );
}
