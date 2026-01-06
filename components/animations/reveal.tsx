"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay: number;
}

export const Reveal = ({ children, width = "fit-content", delay }: Props) => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const mainControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);

  return (
    <div ref={ref} className="relative" style={{ width: width }}>
      <motion.div
        style={{ width }}
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
