import Link from "next/link";

interface DashboardMenuProps {
  toggleDashboard: () => void;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ toggleDashboard }) => {
  return (
    <>
      <button
        type="button"
        className="hidden md:block overflow-hidden rounded-full border border-gray-300 shadow-inner hover:ring-animalred ring-1 ring-transparent"
        onClick={() => {
          toggleDashboard();
        }}
      >
        <span className="sr-only">Toggle dashboard menu</span>

        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="size-10 object-cover"
        />
      </button>

      <div
        id="dashboard-menu"
        className="absolute end-0 z-10 mt-0.5 w-56 rounded-md border shadow-lg hidden bg-animallight dark:bg-animaldark text-animalred dark:text-animalred-light"
        role="menu"
      >
        <div className="p-2 ">
          <p className="py-2 hover:text-animalred-dark dark:hover:text-animalred">
            <Link href="/">Mon profil</Link>
          </p>
          <p className="py-2 w-full border-t-2 border-animalred hover:text-animalred-dark dark:hover:text-animalred">
            <Link href="/">Mes favoris</Link>
          </p>
        </div>

        <div className="mx-2 border-t-2 border-animalred">
          <form method="POST" action="#">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-animalred dark:text-animalred-light justify-end hover:text-animalred-dark dark:hover:text-animalred"
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
      </div>
    </>
  );
};

export default DashboardMenu;
