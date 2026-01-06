import AnimatedLink from "@/components/animated-link";
import { ParagraphBlur } from "@/components/animations/paragraph-blur";
import { Reveal } from "@/components/animations/reveal";
import { WordBlur } from "@/components/animations/word-blur";
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
          <WordBlur text="Showcase" />
        </Link>
        <Reveal delay={0.3}>
          <LuChevronRight className="peer-hover:text-action transition-colors duration-200 text-3xl" />
        </Reveal>
        <h1 className="text-2xl md:text-3xl font-bold scroll-m-20 tracking-tight first:mt-0 text-action peer-hover:text-foreground transition-colors duration-200">
          <WordBlur text="Vini Posters" />
        </h1>
      </div>
      <div className="flex flex-col gap-y-14">
        <section aria-label="Project Description" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="Project Description" />
          </h2>
          <p className="text-md font-extralight mb-4 mt-2">
            <ParagraphBlur
              delay={0.3}
              text="Vini Posters began as a personal creative experiment—designing album posters for my bedroom using Canva as a way to celebrate the music I love. While the results were visually satisfying, the process itself was repetitive, which sparked a simple idea: why not automate it?"
            />
          </p>
          <p className="text-md font-extralight mb-4">
            <ParagraphBlur
              delay={0.35}
              text="That idea led to the development of Vini Posters, a full-stack web application that transforms album artwork into beautifully designed posters with a single click. By leveraging the Spotify Web API, users can search for their favorite albums and instantly generate stylized poster layouts using album images and metadata."
            />
          </p>
          <p>
            <ParagraphBlur
              delay={0.4}
              text="What started as a personal design hobby evolved into a creative automation tool—combining music, design, and engineering to turn inspiration into a seamless, repeatable experience."
            />
          </p>
        </section>

        <section aria-label="Applied Technologies" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="Applied Technologies" />
          </h2>
          <ul
            className="flex flex-wrap gap-2 mt-2"
            aria-label="Applied Technologies"
          >
            {technologies.map(({ name, icon }) => (
              <Reveal delay={0.3} key={name}>
                <li className="flex items-center text-md gap-2 px-3 py-1 rounded-lg border border-trim pointer-events-none">
                  <span className="text-lg">{icon}</span>
                  <span className="text-md">{name}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        <section aria-label="Key Features" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="Key Features" />
          </h2>
          <ul className="ml-6 list-disc [&>li]:mt-4">
            <li>
              <ParagraphBlur
                delay={0.3}
                text="Responsive, design-first UI built with Vue.js and Tailwind CSS, delivering a clean, modern experience across devices."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.35}
                text="Scalable backend architecture powered by Express.js to handle asynchronous requests to the Spotify Web API with speed and reliability."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.4}
                text="One-click poster generation, dynamically transforming album artwork and metadata into visually consistent, polished poster designs."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.45}
                text="Seamless data-to-design pipeline, ensuring every generated poster maintains layout balance, typography consistency, and visual cohesion."
              />
            </li>
          </ul>
        </section>

        <section
          aria-label="Project Links"
          className="flex flex-row justify-center gap-x-6"
        >
          <Reveal delay={0.5}>
            <AnimatedLink
              icon={<LuExternalLink />}
              text="Visit Website"
              href="https://vini-posters.netlify.app/"
              isExternal={true}
            />
          </Reveal>
          <Reveal delay={0.5}>
            <AnimatedLink
              icon={<LuGithub />}
              text="View Code"
              href="https://github.com/ereyes187/poster-automator"
              isExternal={true}
            />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
