import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function ShowcaseItem(project: ShowcaseItem) {
  return (
    <Link href={project.link}>
      <div className="group relative rounded-lg overflow-hidden bg-glass border border-trim hover:bg-highlight transition-colors duration-200">
        <div className="grid grid-cols-12 gap-6 p-6">
          <div className="md:col-span-5 col-span-7 md:row-end-1 row-end-3">
            <Image
              alt={`Screenshot of ${project.title}`}
              src={project.image}
              width={1920}
              height={1080}
              className="object-cover rounded-md border-2 border-transparent group-hover:border-trim"
            />
          </div>
          <div className="md:col-span-7 col-span-12 place-content-center">
            <h2 className="flex gap-1 items-center scroll-m-20 text-lg font-semibold tracking-tight group-hover:text-action">
              {project.title}
              <LuArrowRight className="group-hover:translate-x-2 duration-200" />
            </h2>
            <p className="text-sm font-extralight mb-4">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-1" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-2 py-1 text-xs rounded-lg border border-trim"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
