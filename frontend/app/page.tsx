import HeroSection from "./components/home/HeroSection";
import MapSection from "./components/home/MapSection";
import TestimonySection from "./components/home/TestimonySection";
import FaqSection from "./components/home/FaqSection";
import TeamSection from "./components/home/TeamSection";

export default function Home() {
  return (
    <main className="   dark:text-animallight">
      <section className="pb-10 md:h-screen mx-auto bg-animalcopper-light dark:bg-animalcopper-dark md:pt-16">
        <HeroSection />
      </section>
      <section className="pb-10 md:h-screen mx-auto bg-animalred-light dark:bg-animalred-dark md:pt-16">
        <MapSection />
      </section>
      <section className="pb-10 md:h-screen mx-auto bg-animalcopper-light dark:bg-animalcopper-dark md:pt-16">
        <TestimonySection />
      </section>
      <section className=" mx-auto bg-animallight dark:bg-animaldark py-16 border-t-2 border-b-2">
        <TeamSection />
      </section>
      <section className="py-16 mx-auto bg-animallight dark:bg-animaldark ">
        <FaqSection />
      </section>
    </main>
  );
}
