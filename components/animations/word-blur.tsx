"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  text: string;
}

export const WordBlur = ({ text }: Props) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <span ref={ref}>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block mr-1.5"
          key={index}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 18 },
            visible: { filter: "blur(0)", opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.15 * index }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
