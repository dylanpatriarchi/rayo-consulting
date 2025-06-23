import { Contact } from "@/components/main/contact";
import { CookieBanner } from "@/components/main/cookie-banner";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Pricing } from "@/components/main/pricing";
import { Projects } from "@/components/main/projects";
import { Reviews } from "@/components/main/reviews";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Reviews />
        <Pricing />
        <Contact />
      </div>
      
      {/* Widget fissi */}
      <CookieBanner />
    </main>
  );
}
