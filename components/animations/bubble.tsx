"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Bubble = ({ children, width = "100%" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative h-full" style={{ width: width }}>
      <motion.div
        className="h-full"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
