import AnimatedLink from "@/components/animated-link";

export default function AIBackpackMobile() {
  return (
    <main className="relative h-svh flex flex-col gap-y-8 p-6 overflow-y-scroll">
      <div className="flex flex-col">
        <AnimatedLink href="/showcase" text="Back" direction="left" />
      </div>
    </main>
  );
}
