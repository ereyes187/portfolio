"use client";

import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const COLORS = ["#12c2e9", "#c471ed", "#f64f59"];
// Some other color combinations
// const COLORS = ["#FC5C7D", "#6A82FB"]
// const COLORS = ["#12c2e9", "#c471ed", "#f64f59"];

export const AuroraEffect = ({ children }: AuroraEffectProps) => {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  const bgImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, var(--color-background) 50%, ${color}`; //#ffedd5

  return (
    <motion.section
      style={{
        backgroundImage: bgImage,
      }}
      className="min-h-screen overflow-hidden px-4 place-content-center"
    >
      {children}
    </motion.section>
  );
};
