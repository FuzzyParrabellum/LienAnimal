import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Logo from "../navbar/Logo";

const TestimonySection = () => {
  return (
    <div className=" flex flex-col md:flex-row md:h-full md:justify-center gap-10">
      <div className=" flex flex-col gap-4 px-3 md:max-w-[20rem] pt-12">
        <Logo />
        <h2 className="text-4xl font-semibold">
          Une histoire d'adoption qui fait chaud au coeur
        </h2>
        <div>
          <p>
            Rencontrez Balto, un husky sibérien qui a trouvé son foyer pour la
            vie après avoir été secouru par un refuge. Sa nouvelle famille le
            décrit comme joueur, amenant joie et rires dans leur demeure.
          </p>
        </div>
        <div className="flex justify-end md:justify-start gap-4 mt-3 md:mt-0">
          <Link
            href="/"
            className="px-4 py-2 bg-animalred text-animalred-light hover:text-animalred-dark"
          >
            S'informer
          </Link>
          <Link
            href="/"
            className="px-4 py-2 flex items-center  border-b-3 hover:text-animalred hover:border-animalred border-animalcopper border-dotted"
          >
            Explorer{" "}
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

export default TestimonySection;
