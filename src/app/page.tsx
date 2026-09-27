import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Now } from "@/components/Now";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { LearningJourney } from "@/components/LearningJourney";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Now />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <LearningJourney />
      <Learning />
      <Contact />
    </>
  );
}
