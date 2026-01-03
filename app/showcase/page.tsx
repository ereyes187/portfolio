import ShowcaseItem from "@/components/showcase-item";
import { WordBlur } from "@/components/animations/word-blur";
import { useShowcaseItems } from "@/hooks/useShowcaseItems";
import { ParagraphBlur } from "@/components/animations/paragraph-blur";

export default function Showcase() {
  const projects = useShowcaseItems();

  return (
    <main className="relative flex flex-col gap-y-8 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl text-action scroll-m-20 font-bold tracking-tight first:mt-0">
          <WordBlur text="Showcase" />
        </h1>
        <p className="text-lg md:text-xl scroll-m-20 font-extralight tracking-tight first:mt-0">
          <ParagraphBlur
            delay={0.2}
            text="A collection of my latest professional works and creative experiments (still adding)"
          />
        </p>
      </div>

      <section
        className="relative flex flex-col w-full gap-4"
        aria-label="Projects"
      >
        {projects.map((project) => (
          <ShowcaseItem key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
}
