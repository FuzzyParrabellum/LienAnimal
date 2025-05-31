import Link from "next/link";

const NavbarItems = () => {
  return (
    <ul className="flex items-center gap-6 text-sm">
      <li className="hover:text-animalred-dark dark:hover:text-animalred">
        <Link href="/">Adopter</Link>
      </li>

      <li className="hover:text-animalred-dark dark:hover:text-animalred">
        <Link href="/">Trouver un refuge</Link>
      </li>

      <li className="hover:text-animalred-dark dark:hover:text-animalred">
        <Link href="/">S'impliquer</Link>
      </li>
    </ul>
  );
};

export default NavbarItems;
