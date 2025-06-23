import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Pricing } from "@/components/main/pricing";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Pricing />
      </div>
    </main>
  );
}
