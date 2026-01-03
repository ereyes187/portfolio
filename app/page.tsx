import AnimatedLink from "@/components/animated-link";
import { WordBlur } from "@/components/animations/word-blur";
import { Reveal } from "@/components/animations/reveal";
import { LuImages, LuSend } from "react-icons/lu";

export default function Home() {
  return (
    <main className="relative h-full flex flex-col gap-y-12 justify-center items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl text-center text-action scroll-m-20 font-extrabold tracking-tight text-balance">
          <WordBlur text="Ernesto Reyes" />
        </h1>
        <h2 className="text-xl md:text-2xl scroll-m-20 font-extralight tracking-tight first:mt-0">
          <WordBlur text="Software Engineer & Designer" />
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center px-6">
        <Reveal delay={0.5}>
          <AnimatedLink icon={<LuImages />} text="Showcase" href="/showcase" />
        </Reveal>
        <Reveal delay={0.5}>
          <AnimatedLink icon={<LuSend />} text="Contact" href="/contact" />
        </Reveal>
        {/* <AnimatedLink icon={<LuCircleUser />} text="About" href="/" /> */}
      </div>
    </main>
  );
}
