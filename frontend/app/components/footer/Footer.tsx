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
    <footer className="flex flex-col items-center gap-20 px-16 py-10 w-full dark:text-animallight text-animaldark border-t-2">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 w-full">
        <div className="flex items-start gap-16 w-full">
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
            <div className="flex flex-col items-start flex-1 gap-y-8 ">
              {/* <div className="flex items-start px-0 py-2 w-full"> */}
              <p className="flex-1  w-full text-end">Lien1</p>
              <p className="flex-1  w-full text-end">Lien2</p>
              <p className="flex-1  w-full text-end">Lien3</p>
              <p className="flex-1  w-full text-end">Lien4</p>
              {/* </div> */}
            </div>

            {/* Liens colonne de droite */}
            <div className="flex flex-col items-start flex-1 gap-y-8">
              {/* <div className="flex items-start px-0 py-2 w-full"> */}
              <p className="flex-1  w-full text-end">Lien5</p>
              <p className="flex-1 w-full text-end">Lien6</p>
              <p className="flex-1 w-full text-end">Lien7</p>
              <p className="flex-1 w-full text-end">Lien8</p>
              {/* </div> */}
            </div>
          </section>
        </div>

        {/* Copyrights et liens légaux */}
        <section className="flex justify-between items-start w-full border-t-2 pt-5 ">
          <p className="w-fit mt-[-1.00px]">
            © 2025 LienAnimal. Tous droits réservés.
          </p>

          <div className="flex items-start gap-6 text-sm">
            <p className="w-fit mt-[-1.00px]">Politique de confidentialité</p>
            <p className="w-fit mt-[-1.00px]">Termes de service</p>
            <p className="w-fit mt-[-1.00px]">Réglages des cookies</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
