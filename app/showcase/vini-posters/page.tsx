import AnimatedLink from "@/components/animated-link";
import Link from "next/link";
import { LuChevronRight, LuExternalLink, LuGithub } from "react-icons/lu";
import { RiSpotifyLine, RiTailwindCssLine, RiVuejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

export default function ViniPosters() {
  const technologies = [
    { name: "Vue.js", icon: <RiVuejsLine /> },
    { name: "Tailwind", icon: <RiTailwindCssLine /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Spotify Web API", icon: <RiSpotifyLine /> },
  ];

  return (
    <main className="relative flex flex-col gap-y-8 p-6">
      <div className="flex flex-wrap items-center">
        <Link
          href="/showcase"
          className="peer text-2xl md:text-3xl font-bold scroll-m-20 tracking-tight first:mt-0 hover:text-action transition-colors duration-200"
        >
          Showcase
        </Link>
        <LuChevronRight className="peer-hover:text-action transition-colors duration-200 text-3xl" />
        <h1 className="text-2xl md:text-3xl font-bold scroll-m-20 tracking-tight first:mt-0 text-action peer-hover:text-foreground transition-colors duration-200">
          Vini Posters
        </h1>
      </div>
      <div className="flex flex-col gap-y-6">
        <section aria-label="Technology Used" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            Technologies Used
          </h2>
          <ul
            className="flex flex-wrap gap-2 mt-2"
            aria-label="Technologies used"
          >
            {technologies.map(({ name, icon }) => (
              <li
                key={name}
                className="flex items-center text-md gap-2 px-3 py-1 rounded-lg border border-trim pointer-events-none"
              >
                <span className="text-lg">{icon}</span>
                <span className="text-md">{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Project Description" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            Project Description
          </h2>
          <p className="text-md font-extralight mb-4 mt-2">
            Creative tool that transforms your favorite album covers into
            beautiful poster designs.
          </p>
          <p className="text-md font-extralight mb-4">
            Originally inspired by posters that I designed for some of my
            favorite music using Canva, Vini Posters is a full-stack web
            application that automates the design process. layout.
          </p>
          <p>
            Leveraging the Spotify Web API for efficient data retrieval of album
            images and metadata, album information is seamlessly formatted into
            a stylistic poster
          </p>
        </section>

        <section aria-label="Key Features" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            Key Features
          </h2>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>
              A modern and fully responsive design utilizing Vue.js and Tailwind
              CSS
            </li>
            <li>
              Robust back-end logic using Express.js to efficiently manage and
              route asynchronous requests to the Spotify Web API, ensuring fast
              and reliable data fetching.
            </li>
            <li>
              Dynamic generation of poster designs using selected album data,
              ensuring visual consistency across all outputs.
            </li>
          </ul>
        </section>

        <section
          aria-label="Project Links"
          className="flex flex-row justify-center gap-x-6"
        >
          <AnimatedLink
            icon={<LuExternalLink />}
            text="Visit Website"
            href="https://vini-posters.netlify.app/"
            isExternal={true}
          />
          <AnimatedLink
            icon={<LuGithub />}
            text="View Code"
            href="https://github.com/ereyes187/poster-automator"
            isExternal={true}
          />
        </section>
      </div>
    </main>
  );
}
