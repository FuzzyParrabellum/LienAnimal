import Link from "next/link";

const HiddenMenu = () => {
  return (
    <>
      <ul className="w-full">
        <li className="w-full py-2 hover:text-animalred-dark dark:hover:text-animalred">
          <Link href="/">Adopter</Link>
        </li>
        <li className="border-t-2 border-animalred py-2 hover:text-animalred-dark dark:hover:text-animalred">
          <Link href="/">Trouver un refuge</Link>
        </li>
        <li className="border-t-2 border-animalred py-2 hover:text-animalred-dark dark:hover:text-animalred">
          <Link href="/">S'impliquer</Link>
        </li>
        <li className="border-t-2 border-animalred py-2 hover:text-animalred-dark dark:hover:text-animalred">
          <Link href="/">
            <div className="items-center flex">
              <span className="sr-only">Mon profil</span>
              <button
                type="button"
                className="overflow-hidden rounded-full border border-animalred shadow-inner "
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover "
                />
              </button>
              <p className="px-2">Mon profil</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className="p-2 border-t-2 border-animalred">
        <form method="POST" action="#">
          <button
            type="submit"
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm justify-end hover:text-animalred-dark dark:hover:text-animalred"
            role="menuitem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            <Link href="/">Se déconnecter</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default HiddenMenu;
