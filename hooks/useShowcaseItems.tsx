export function useShowcaseItems(): ShowcaseItem[] {
  return [
    {
      id: "Conectado-Web",
      title: "AI Backpack Web App",
      image: "/aibackpack-web.png",
      description:
        "An LLM-powered platform designed to help career seekers find opportunities tailored to their goals",
      tags: ["Next.js", "Firebase", "Material UI", "Google Gemini API"],
      link: "/showcase/aibackpack-web",
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
      image: "/aibackpack-mobile.png",
      description:
        "A mobile companion to the AI Backpack platform, built with a focus on networking and real-time messaging",
      tags: ["React Native", "Expo", "Firebase", "ChatKitty API"],
      link: "/showcase/aibackpack-mobile",
    },
  ];
}
