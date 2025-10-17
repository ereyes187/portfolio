"use client";

import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AnimatedLink({
  direction,
  text,
  href,
}: AnimatedLinkProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link
      href={href}
      className="flex p-px items-center gap-x-2 border border-trim rounded-lg bg-glass hover:bg-highlight hover:text-action overflow-hidden w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-row items-center w-full px-6 py-3">
        <AnimatePresence>
          {hovered && direction === "left" && (
            <motion.div
              initial={{ x: -80, width: 0 }}
              animate={{ x: 0, width: 20 }}
              exit={{ x: -80, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              <LuArrowLeft />
            </motion.div>
          )}
        </AnimatePresence>
        <p className="font-medium px-2">{text}</p>
        <AnimatePresence>
          {hovered && direction === "right" && (
            <motion.div
              initial={{ x: 80, width: 0 }}
              animate={{ x: 0, width: 20 }}
              exit={{ x: 80, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              <LuArrowRight />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
}
