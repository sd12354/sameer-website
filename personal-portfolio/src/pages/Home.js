import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import IntroText from '../components/IntroText';
import TechTicker from '../components/TechTicker';
import CustomCursor from '../components/CustomCursor';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="gradient-circles">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-3" />
      </div>
      <div className="home-container" id="home">
        <div className="headshot-orbit-wrapper">
          <motion.div
            className="headshot-wrapper"
            whileHover="hovered"
            initial="initial"
            animate="visible"
          >
            <motion.div
              className="headshot-background"
              variants={{
                initial: { scale: 1, rotate: 0 },
                hovered: {
                  scale: 1.05,
                  rotate: -1.5,
                  transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
                }
              }}
            />
            <motion.div
              className="headshot-card"
              variants={{
                initial: fadeInUp.hidden,
                visible: fadeInUp.visible,
                hovered: {
                  scale: 1.05,
                  rotate: -1.5,
                  boxShadow: "0 0 25px #ff69b4",
                  transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
                }
              }}
            >
              <img src="/headshot.png" alt="Sameer Dhanda" className="headshot" />
              <h1>Sameer Dhanda</h1>
              <h2>Computer Science Major</h2>
              <h4>Boston, MA</h4>
              <h3 style={{ backgroundColor: '#ff69b4', opacity: "50%", color: "white", borderRadius: "10px" }}>
                Incoming <a href='https://www.nba.com/' style={{ color: "white" }}>@NBA</a>
              </h3>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <IntroText />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <TechTicker />
        </motion.div>
      </div>
    </>
  );
}
