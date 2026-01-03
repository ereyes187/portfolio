import Link from "next/link";
import { RiNextjsLine, RiFirebaseLine, RiGeminiLine } from "react-icons/ri";
import { SiFigma, SiMui } from "react-icons/si";
import { LuChevronRight, LuExternalLink } from "react-icons/lu";
import AnimatedLink from "@/components/animated-link";
import { WordBlur } from "@/components/animations/word-blur";
import { Reveal } from "@/components/animations/reveal";
import { ParagraphBlur } from "@/components/animations/paragraph-blur";

export default function AIBackpackWeb() {
  const technologies = [
    { name: "Next.js", icon: <RiNextjsLine /> },
    { name: "Firebase", icon: <RiFirebaseLine /> },
    { name: "Material UI", icon: <SiMui /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Google Gemini API", icon: <RiGeminiLine /> },
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
          <WordBlur text="AI Backpack Web App" />
        </h1>
      </div>
      <div className="flex flex-col gap-y-14">
        <section aria-label="Technology Used" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="Technologies Used" />
          </h2>
          <ul
            className="flex flex-wrap gap-2 mt-2"
            aria-label="Technologies used"
          >
            {technologies.map(({ name, icon }) => (
              <Reveal delay={0.3} key={name}>
                <li className="flex items-center gap-2 px-3 py-2 rounded-lg border border-trim pointer-events-none">
                  <span className="text-lg">{icon}</span>
                  <span className="text-md">{name}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        <section aria-label="Project Description" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="Project Description" />
          </h2>
          <p className="text-md font-extralight mb-4 mt-2">
            <ParagraphBlur
              delay={0.3}
              text="An LLM-powered platform designed to help career seekers find
            opportunities tailored to their goals."
            />
          </p>
          <p className="text-md font-extralight mb-4">
            <ParagraphBlur
              delay={0.35}
              text="Paired with the SEAM™ Career Coach, created by Dr. Madeleine F.
            Wallace, Ph.D, the AI Backpack is designed to support learners,
            students, and professionals in navigating their education-to-career
            journey."
            />
          </p>
          <p className="text-md font-extralight">
            <ParagraphBlur
              delay={0.4}
              text="Beyond intelligent opportunity matching, users can find a community
            space to connect with students, professors, professionals, mentors,
            and leaders across tech and education."
            />
          </p>
        </section>

        <section aria-label="My Role" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="My Role" />
          </h2>
          <p className="text-md font-extralight mt-2">
            <ParagraphBlur
              delay={0.3}
              text="As a Software Developer Intern, I truly wore every hat—from research
            and UI/UX design to hands-on development and product
            strategy—gaining a holistic understanding of the product lifecycle."
            />
          </p>
        </section>

        <section aria-label="My Contributions" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="My Contributions" />
          </h2>
          <ul className="ml-6 list-disc [&>li]:mt-4">
            <li>
              <ParagraphBlur
                delay={0.3}
                text="Engineered a seamless migration of 50,000+ documents from NoSQL to
              a relational SQL database, improving relational data handling,
              optimizing data accessibility, and reducing projected operational
              costs by ∼50%."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.35}
                text="Re-architected the codebase leveraging Next.js, leading to ∼35%
              faster page load times and simplified component management."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.4}
                text="Redesigned the frontend with Material-UI to deliver a responsive
              user interface, establishing a new and consistent company branding
              standard."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.45}
                text="Implemented advanced filtering logic and semantic search
              capabilities to improve relevance and accuracy of opportunity
              search results."
              />
            </li>
          </ul>
        </section>

        <section
          aria-label="Project Links"
          className="flex flex-row justify-center"
        >
          <Reveal delay={0.5}>
            <AnimatedLink
              icon={<LuExternalLink />}
              text="Visit Website"
              href="https://aibackpack.conectado.com/"
              isExternal={true}
            />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
