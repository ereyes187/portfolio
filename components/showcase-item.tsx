import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { WordBlur } from "./animations/word-blur";
import { Reveal } from "./animations/reveal";
import { Bubble } from "./animations/bubble";
import { ParagraphBlur } from "./animations/paragraph-blur";

export default function ShowcaseItem(project: ShowcaseItem) {
  return (
    <Link href={project.link}>
      <div className="group relative rounded-lg overflow-hidden bg-glass border border-trim hover:bg-highlight transition-colors duration-200">
        <div className="grid grid-cols-12 gap-6 p-6">
          <div className="md:col-span-5 col-span-7 md:row-end-1 row-end-3">
            <Bubble>
              <Image
                alt={`Screenshot of ${project.title}`}
                src={project.image}
                width={1920}
                height={1080}
                className="object-cover rounded-md border-2 border-transparent group-hover:border-trim"
              />
            </Bubble>
          </div>
          <div className="md:col-span-7 col-span-12 place-content-center">
            <h2 className="flex gap-1 items-center scroll-m-20 text-lg font-semibold tracking-tight group-hover:text-action">
              <WordBlur text={project.title} />
              <Reveal delay={0.4}>
                <LuArrowRight className="group-hover:translate-x-2 duration-200" />
              </Reveal>
            </h2>

            <p className="text-sm font-extralight mt-1">
              <ParagraphBlur delay={0.4} text={project.description} />
            </p>
            <ul
              className="flex flex-wrap gap-1 mt-4"
              aria-label="Technologies used"
            >
              {project.tags.map((tag) => (
                <Reveal delay={1} key={tag}>
                  <li className="px-2 py-1 text-xs rounded-lg border border-trim">
                    {tag}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
