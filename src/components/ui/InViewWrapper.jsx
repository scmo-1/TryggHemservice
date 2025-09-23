"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function InViewWrapper({ children, delay = 0.3, y = 50 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default InViewWrapper;
