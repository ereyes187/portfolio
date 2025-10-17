"use client";

import { useShortcutsMenu } from "@/providers/shortcuts-provider";
import { LuCommand } from "react-icons/lu";

export const ShortcutsButton = () => {
  const { setOpen } = useShortcutsMenu();

  return (
    <nav className="block">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 cursor-pointer hover:text-action transition-colors duration-200"
      >
        <LuCommand />
        Shortcuts
      </button>
    </nav>
  );
};
