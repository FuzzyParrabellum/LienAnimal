import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className=" text-animalred flex text-center" href="/">
      <span className="sr-only">Home</span>
      <Image
        src="/LienAnimalLogo.png"
        alt="LienAnimal logo"
        width={64}
        height={64}
      />

      <span className="font-extrabold self-end mx-1">LienAnimal</span>
    </Link>
  );
};

export default Logo;
