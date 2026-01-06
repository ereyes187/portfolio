import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { WordBlur } from "@/components/animations/word-blur";
import { Reveal } from "@/components/animations/reveal";
import { ParagraphBlur } from "@/components/animations/paragraph-blur";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { SiQlik } from "react-icons/si";
import { RiBox3Line, RiGeminiLine, RiNotionLine } from "react-icons/ri";

export default function AIAcademy() {
  const technologies = [
    { name: "Qlik Sense", icon: <SiQlik /> },
    { name: "Google Gemini", icon: <RiGeminiLine /> },
    { name: "Zapier", icon: <HiOutlineLightningBolt /> },
    { name: "Relay.app", icon: <RiBox3Line /> },
    { name: "Notion AI", icon: <RiNotionLine /> },
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
          <WordBlur text="AI Academy for Business" />
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
              text="The AI Academy for Business was a hands-on, six-week digital curriculum developed in collaboration with Conectado and SUMA Wealth as part of the Recover & Reimagine L.A. initiative. The program was designed to support fire-impacted business owners by helping them rebuild and reimagine their businesses using accessible AI tools."
              // text="The AI Academy for Business was a teaching curriculum designed in collaboration with Conectado and SUMA Wealth to empower business owners with the practical knowledge and tools needed to transform their operations using artificial intelligence."
            />
          </p>
          <p className="text-md font-extralight mb-4 mt-2">
            <ParagraphBlur
              delay={0.35}
              text="Built for entrepreneurs with limited capital, the curriculum emphasized practical applications of AI over abstract theory. Participants learned how to integrate AI into everyday business functions such as customer support, marketing, operations, analytics, and long-term strategy."
              // text="The curriculum focused on real-world applications of AI rather than technical theory, showing participants how to integrate AI into daily workflows—such as customer support, marketing, operations, analytics, and decision-making. Through hands-on examples and tool-driven exercises, participants learned how to automate repetitive tasks, extract actionable insights from data, and adopt AI responsibly to improve efficiency, reduce costs, and scale sustainably."
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
              text="As an AI Strategy Consultant, I led the end-to-end design of core curriculum modules and owned the technical implementation of applied AI systems used for live demonstrations, bridging instructional content with real-world system design."
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
                <li className="flex items-center gap-2 px-3 py-2 rounded-lg border border-trim pointer-events-none">
                  <span className="text-lg">{icon}</span>
                  <span className="text-md">{name}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        <section aria-label="My Contributions" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            <WordBlur text="My Contributions" />
          </h2>
          <ul className="ml-6 list-disc [&>li]:mt-4">
            <li>
              <ParagraphBlur
                delay={0.3}
                text="Designed and delivered core curriculum modules with live hands-on demonstrations for 30+ business owners"
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.35}
                text="Built practical AI systems—including smart assistants, multi-step workflow automations, and agents—to model real-world business use cases."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.4}
                text="Demonstrated AI-assisted data analysis workflows that transformed raw business data into actionable insights within seconds."
              />
            </li>
            <li>
              <ParagraphBlur
                delay={0.45}
                text="Achieved an average satisfaction rating of 9/10 based on post-session participant surveys."
              />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
