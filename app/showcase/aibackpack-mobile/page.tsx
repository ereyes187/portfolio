import { LuChevronRight } from "react-icons/lu";
import { RiReactjsFill, RiFirebaseLine, RiBox3Line } from "react-icons/ri";
import { SiExpo } from "react-icons/si";
import Link from "next/link";

export default function AIBackpackMobile() {
  const technologies = [
    { name: "React Native", icon: <RiReactjsFill /> },
    { name: "Expo", icon: <SiExpo className="text-sm" /> },
    { name: "Firebase", icon: <RiFirebaseLine /> },
    { name: "ChatKitty API", icon: <RiBox3Line /> },
  ];

  return (
    <main className="relative h-svh flex flex-col gap-y-8 p-6 overflow-y-scroll">
      <div className="flex flex-wrap items-center">
        <Link
          href="/showcase"
          className="peer text-2xl md:text-3xl font-bold scroll-m-20 tracking-tight first:mt-0 hover:text-action transition-colors duration-200"
        >
          Showcase
        </Link>
        <LuChevronRight className="peer-hover:text-action transition-colors duration-200 text-3xl" />
        <h1 className="text-2xl md:text-3xl font-bold scroll-m-20 tracking-tight first:mt-0 text-action peer-hover:text-foreground transition-colors duration-200">
          AI Backpack Mobile App
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
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-trim pointer-events-none"
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
            My SWE capstone: the mobile companion to the AI Backpack platform,
            built with a focus on real-time messaging
          </p>
          <p className="text-md font-extralight mb-4">
            This capstone project was developed to address the widespread issue
            of fragmented career resources by unifying them into one cohesive
            mobile experience.
          </p>
          <p className="text-md font-extralight">
            The AI Backpack Mobile App centralizes scholarships, internships,
            and other career pathways into a seamless, searchable interface. Its
            real-time messaging feature serves as the foundation for meaningful
            peer-to-peer networking, enabling users to share insights and build
            professional relationships.
          </p>
        </section>

        <section aria-label="My Role" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            My Role
          </h2>
          <p className="text-md font-extralight mt-2">
            As Technical Lead, I drove the capstone project by leveraging my
            full-stack expertise to implement core features, strategically
            delegating tasks, and overseeing all project progress to ensure
            timely and successful delivery.
          </p>
        </section>

        <section aria-label="My Contributions" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            My Contributions
          </h2>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>
              Engineered a scalable chat solution using the ChatKitty API,
              accelerating delivery by ∼70% while lowering costs by 2-5x
              compared to competing APIs
            </li>
            <li>
              Analyzed user needs and product requirements to ensure technical
              feasibility, delivering the project 2 weeks ahead of schedule.
            </li>
            <li>
              Integrated Google Firebase and Firebase Auth to implement robust
              user authentication and real-time data synchronization, fulfilling
              a core product requirement.
            </li>
            <li>
              Managed the team's code review process, enforcing best practices
              and rigorous testing protocols that resulted in a 30% reduction in
              critical bugs reported during final testing.
            </li>
          </ul>
        </section>

        <section aria-label="Video Demo" className="flex flex-col">
          <h2 className="text-lg md:text-xl scroll-m-20 font-medium tracking-tight first:mt-0 text-action">
            Video Demo
          </h2>
          <video className="mt-2 w-full md:w-3/4 p-2" controls>
            <source src="/aibackpack-mobile-demo.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
    </main>
  );
}
