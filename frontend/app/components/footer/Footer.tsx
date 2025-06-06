import {
  SiFacebook,
  SiInstagram,
  SiSlack,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Logo from "../navbar/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-20 px-4 md:px-16 py-10 w-full dark:text-animallight text-animaldark dark:bg-animaldark dark:border-animalred-dark border-t-2">
      <div className="flex flex-col max-w-screen-xl items-start w-full">
        <div className="flex flex-col-reverse md:flex-row items-start gap-16 w-full pb-10">
          {/* Infos société */}
          <section className="flex flex-col gap-8 items-start flex-1">
            <Logo />

            <div className="flex flex-col items-start gap-6 w-full">
              {/* Adresse */}
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="w-full mt-[-1.00px]">Adresse :</div>
                <div className="w-full">
                  65 Av. du Général de c'est un adresse fictive, 97469,
                  DreamLand
                </div>
              </div>

              {/* Infos de contact */}
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="w-full mt-[-1.00px]">Contact :</div>
                <div className="w-full">565484546486</div>
                <div className="w-full">lien.animal@test.com</div>
              </div>
            </div>

            {/* Icônes médias sociaux */}
            <div className="flex gap-3 items-center">
              <Link href="/">
                <SiFacebook className="hover:text-animalred" />
              </Link>
              <Link href="/">
                <SiInstagram className="hover:text-animalred" />
              </Link>
              <Link href="/">
                <SiX className="hover:text-animalred" />
              </Link>
              <Link href="/">
                <SiYoutube className="hover:text-animalred" />
              </Link>
              <Link href="/">
                <SiSlack className="hover:text-animalred" />
              </Link>
            </div>
          </section>

          {/* Footer links */}
          <section className="w-full gap-6 flex self-center flex-1 font-bold text-gray-600">
            {/* Liens colonne de gauche */}
            <div className="flex flex-col items-center md:items-end flex-1 gap-y-8 ">
              {/* <div className="flex items-start px-0 py-2 w-full"> */}

              <p className="flex-1  text-end hover:text-animalred">
                <Link href="/">Lien1</Link>
              </p>

              <p className="flex-1  text-end hover:text-animalred">
                <Link href="/">Lien2</Link>
              </p>

              <p className="flex-1   text-end hover:text-animalred">
                <Link href="/">Lien3</Link>
              </p>

              <p className="flex-1   text-end hover:text-animalred">
                <Link href="/">Lien4</Link>
              </p>

              {/* </div> */}
            </div>

            {/* Liens colonne de droite */}
            <div className="flex flex-col items-center md:items-end flex-1 gap-y-8">
              {/* <div className="flex items-start px-0 py-2 w-full"> */}

              <p className="flex-1   text-end hover:text-animalred">
                <Link href="/">Lien5</Link>
              </p>

              <p className="flex-1  text-end hover:text-animalred">
                <Link href="/">Lien6</Link>
              </p>

              <p className="flex-1  text-end hover:text-animalred">
                <Link href="/">Lien7</Link>
              </p>

              <p className="flex-1  text-end hover:text-animalred">
                <Link href="/">Lien8</Link>
              </p>

              {/* </div> */}
            </div>
          </section>
        </div>

        {/* Copyrights et liens légaux */}
        <section className="flex flex-col-reverse md:flex-row-reverse justify-between items-start w-full border-t-2 pt-5">
          <p className="md:w-fit mt-5 md:mt-0 w-full text-end md:text-start">
            © 2025 LienAnimal. Tous droits réservés.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-sm w-full md:w-fit border-b-2 md:border-0 pb-5 md:pb-0">
            <Link href="/">
              <p className="w-fit hover:text-animalred md:mt-[3.00px]">
                Politique de confidentialité
              </p>
            </Link>
            <Link href="/">
              <p className="w-fit hover:text-animalred md:mt-[3.00px]">
                Termes de service
              </p>
            </Link>
            <Link href="/">
              <p className="w-fit hover:text-animalred  md:mt-[3.00px]">
                Réglages des cookies
              </p>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
