export function useShowcaseItems(): ShowcaseItem[] {
  return [
    {
      id: "Conectado-Bootcamp",
      title: "AI Academy for Business",
      image: "/ai-academy.png",
      description:
        "Teaching curriculum designed to help entrepeneurs discover how artificial intelligence can enhance day-to-day business operations",
      tags: ["Qlik Sense", "Google Gemini", "Zapier", "Relay.app", "Notion AI"],
      link: "/showcase/ai-academy",
    },
    {
      id: "Conectado-Web",
      title: "AI Backpack Web App",
      image: "/ai-backpack-web.png",
      description:
        "An LLM-powered platform designed to help career seekers find opportunities tailored to their goals",
      tags: [
        "Next.js",
        "Firebase",
        "Material UI",
        "Figma",
        "Google Gemini API",
      ],
      link: "/showcase/ai-backpack-web",
    },
    {
      id: "Vini",
      title: "Vini Posters",
      image: "/vini-posters.png",
      description:
        "Creative tool that transforms your favorite album covers into beautiful poster designs",
      tags: ["Vue.js", "Tailwind", "Express", "Spotify Web API"],
      link: "/showcase/vini-posters",
    },
    {
      id: "Conectado-Mobile",
      title: "AI Backpack Mobile App",
      image: "/ai-backpack-mobile.png",
      description:
        "My SWE capstone: the mobile companion to the AI Backpack platform, built with a focus on real-time messaging",
      tags: ["React Native", "Expo", "Firebase", "ChatKitty API"],
      link: "/showcase/ai-backpack-mobile",
    },
  ];
}
