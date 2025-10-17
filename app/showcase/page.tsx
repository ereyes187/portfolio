import ShowcaseItem from "@/components/showcase-item";
import { useShowcaseItems } from "@/hooks/useShowcaseItems";

export default function Showcase() {
  const projects = useShowcaseItems();

  return (
    <main className="relative h-svh flex flex-col gap-y-8 p-6 overflow-y-scroll">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl text-action scroll-m-20 font-bold tracking-tight first:mt-0">
          Showcase
        </h1>
        <p className="text-lg md:text-xl scroll-m-20 font-extralight tracking-tight first:mt-0">
          A collection of my latest professional works and creative experiments
          (still adding)
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
