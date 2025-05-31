import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
    <main className="   dark:text-animallight">
      <section className="h-screen mx-auto bg-animalcopper-light dark:bg-animalcopper-dark pt-16">
        <HeroSection />
      </section>
      <section className="h-screen mx-auto bg-animalred-light dark:bg-animalred-dark pt-16"></section>
      {/* <section className="h-screen bg-animalred-light">
        <p>Second section</p>
      </section>
      <section className="h-screen bg-animalcopper-light">
        <p>Third section</p>
      </section> */}
    </main>
  );
}
