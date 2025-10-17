"use client";

import { createContext, useContext, useState } from "react";
import ShortcutsMenu from "@/components/shortcuts-menu";

const ShortcutsMenuContext = createContext<ShortcutsMenuContext | null>(null);

// Custom hook to use the context
export const useShortcutsMenu = () => {
  const context = useContext(ShortcutsMenuContext);

  if (!context) {
    throw new Error(
      "useShortcutsMenu must be used within a ShortcutsMenuContext.Provider"
    );
  }

  return context;
};

type ShortcutsMenuProviderProps = {
  children: React.ReactNode;
};

export default function ShortcutsMenuProvider({
  children,
}: ShortcutsMenuProviderProps) {
  // State to be passed into the context
  const [open, setOpen] = useState(false);
  const [tabs, setTabs] = useState(["Home"]);

  return (
    <ShortcutsMenuContext.Provider value={{ open, setOpen, tabs, setTabs }}>
      {children}
      <ShortcutsMenu />
    </ShortcutsMenuContext.Provider>
  );
}
