"use client";

import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export default function AnimatedLink({
  icon,
  text,
  href,
  isExternal,
}: AnimatedLinkProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link
      href={href}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={clsx(
        "flex p-px items-center gap-x-2 border border-trim rounded-lg bg-glass hover:bg-highlight hover:text-action overflow-hidden w-fit"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-row items-center w-full px-4 py-2 md:px-6 md:py-3">
        <AnimatePresence>
          {!hovered && (
            <motion.div
              initial={{ x: -80, width: 0 }}
              animate={{ x: 0, width: 20 }}
              exit={{ x: -80, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-lg">{icon}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="font-medium px-2">{text}</p>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ x: 80, width: 0 }}
              animate={{ x: 0, width: 20 }}
              exit={{ x: 80, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              <LuArrowRight className="text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
}
