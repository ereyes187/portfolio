"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  text: string;
  delay: number;
}

export const ParagraphBlur = ({ text, delay }: Props) => {
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
      <motion.span
        aria-hidden="true"
        className="inline-block align-top mr-1.5"
        variants={{
          hidden: { filter: "blur(10px)", opacity: 0, y: 18 },
          visible: { filter: "blur(0)", opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {text}
      </motion.span>
    </span>
  );
};
