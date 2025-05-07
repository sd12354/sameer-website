import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

export default function Loader() {
  return (
    <motion.div 
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="spinner" />
    </motion.div>
  );
}

