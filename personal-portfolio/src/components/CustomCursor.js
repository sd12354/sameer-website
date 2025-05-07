import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
}
