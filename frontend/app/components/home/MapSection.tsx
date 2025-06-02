import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MapSection = () => {
  return (
    <div className=" flex flex-col md:flex-row-reverse md:h-full md:justify-center gap-10 items-center">
      <div className=" flex flex-col gap-4 px-3 md:max-w-[30rem] pt-12">
        <div className="flex items-center">
          {/* <p className="font-bold pe-4">Explorez</p> */}
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-animalred "></span>

          <span className="shrink-0 px-4 font-bold">Explorez</span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-animalred "></span>
        </div>

        <h2 className="text-4xl font-semibold">
          Découvrez des refuges d'animaux avec notre carte interactive
        </h2>
        <div>
          <p>
            Notre carte interactive permet de trouver simplement des refuges
            d'animaux abandonnés. Trouvez votre futur compagnon dès maintenant
            dans un de ces refuges !
          </p>
        </div>
        <div className="flex justify-end md:justify-start gap-4 mt-3 md:mt-0">
          <Link
            href="/"
            className="px-4 py-2 hover:text-animalred-dark border-1 border-animalred hover:border-animaldark text-animalred dark:hover:text-animallight dark:hover:border-animallight"
          >
            Trouver
          </Link>
          <Link
            href="/"
            className="px-4 py-2 flex items-center  border-b-3 hover:text-animalred hover:border-animalred border-animalcopper border-dotted"
          >
            Rechercher{" "}
            <div className="mt-[4.00px] ps-3">
              <ChevronRight />
            </div>
          </Link>
        </div>
      </div>

      <div className="border-2 w-[320px] h-[320px] sm:h-[480px] sm:w-[480px] md:w-[640px] md:h-[640px] bg-animalcopper self-center">
        image partnaire animal placeholder
      </div>
    </div>
  );
};

export default MapSection;
