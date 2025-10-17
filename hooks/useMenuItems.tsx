"use client";

import {
  LuImages,
  LuHouse,
  LuMoon,
  LuPalette,
  LuSend,
  LuSun,
  LuLinkedin,
  LuGithub,
  LuFileCode,
} from "react-icons/lu";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function useMenuItems(): ShortcutsMenuItem[] {
  const { setTheme } = useTheme();
  const router = useRouter();

  return [
    {
      id: "Home",
      group: "Navigation",
      title: "Go to Home Page",
      icon: LuHouse,
      action: () => router.push("/"),
    },
    {
      id: "Showcase",
      group: "Navigation",
      title: "View Showcase",
      icon: LuImages,
      action: () => router.push("/showcase"),
    },
    {
      id: "Contact",
      group: "Navigation",
      title: "Contact Me",
      icon: LuSend,
      action: () => router.push("/contact"),
    },

    {
      id: "Theme",
      group: "Settings",
      title: "Change Theme",
      icon: LuPalette,
      children: [
        {
          id: "Light-Theme",
          group: "Settings",
          title: "Set Light Theme",
          icon: LuSun,
          action: () => setTheme("light"),
        },
        {
          id: "Dark-Theme",
          group: "Settings",
          title: "Set Dark Theme",
          icon: LuMoon,
          action: () => setTheme("dark"),
        },
      ],
    },

    {
      id: "LinkedIn",
      group: "Socials",
      title: "Connect on LinkedIn",
      icon: LuLinkedin,
      action: () =>
        window.open("https://www.linkedin.com/in/ernesto-a-reyes/", "_blank"),
    },
    {
      id: "GitHub",
      group: "Socials",
      title: "View my GitHub",
      icon: LuGithub,
      action: () => window.open("https://github.com/ereyes187", "_blank"),
    },

    {
      id: "Resume",
      group: "Miscellaneous",
      title: "Download Resume",
      icon: LuFileCode,
      action: () => window.open("/Ernesto_Reyes.pdf", "_blank"),
    },
  ];
}
