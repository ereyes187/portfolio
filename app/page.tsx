import AnimatedLink from "@/components/animated-link";

export default function Home() {
  return (
    <main className="relative h-svh flex flex-col gap-y-12 justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl text-center text-action scroll-m-20 font-extrabold tracking-tight text-balance">
          Ernesto Reyes
        </h1>
        <h2 className="text-lg md:text-xl text-center scroll-m-20 font-semibold tracking-tight first:mt-0">
          Software Engineer & Designer
        </h2>
        <div></div>
      </div>
      <div className="flex flex-row gap-x-6 justify-center">
        <AnimatedLink direction="right" text="Showcase" href="/showcase" />
        <AnimatedLink direction="right" text="Contact" href="/contact" />
      </div>
    </main>
  );
}
