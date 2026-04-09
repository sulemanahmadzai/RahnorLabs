import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Reviews } from "@/components/sections/Reviews";
import { WorkMap } from "@/components/sections/WorkMap";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { SeoContent } from "@/components/seo/SeoContent";

export default function Home() {
  return (
    <>
      <Hero />
      <Badges />
      <Services />
      <Projects />
      <Reviews />
      <WorkMap />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <SeoContent />
    </>
  );
}
