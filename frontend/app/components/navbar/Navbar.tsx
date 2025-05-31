"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { LightDarkToggle } from "../LightDarkToggle";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import DashboardMenu from "./DashboardMenu";
import HamburgerMenu from "./HamburgerMenu";
import HiddenMenu from "./HiddenMenu";

const Navbar = () => {
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);
  const [showDashboardMenu, setShowDashboardMenu] = useState(true);

  useEffect(() => {
    const hiddenMenu = document.getElementById("hidden-menu");
    if (showHiddenMenu) {
      hiddenMenu.classList.remove("hidden");
    } else {
      hiddenMenu.classList.add("hidden");
    }
  });

  useEffect(() => {
    const dashboardMenu = document.getElementById("dashboard-menu");
    if (showDashboardMenu) {
      dashboardMenu.classList.add("hidden");
    } else {
      dashboardMenu.classList.remove("hidden");
    }
  });

  const toggleHiddenMenu = () => {
    setShowHiddenMenu(!showHiddenMenu);
  };

  const toggleDashboardMenu = () => {
    setShowDashboardMenu(!showDashboardMenu);
  };

  return (
    <>
      <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 min-w-[320px] bg-animallight dark:bg-animaldark text-animalred dark:text-animalred-light">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center">
            <Logo />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <NavbarItems />
            </nav>

            <div className="relative block ">
              <DashboardMenu toggleDashboard={toggleDashboardMenu} />
            </div>

            <div
              className="block md:hidden"
              onClick={() => {
                toggleHiddenMenu();
              }}
            >
              <HamburgerMenu />
            </div>
          </div>
          <div className="border-1 border-amber-300 dark:border-animallight m-0 p-0 mx-1 rounded-md hover:bg-animalred dark:hover:bg-animalred-dark md:mx-3">
            <LightDarkToggle />
          </div>
        </div>
      </div>

      <div
        id="hidden-menu"
        className="hidden md:hidden w-full px-3 bg-animallight dark:bg-animaldark text-animalred dark:text-animalred-light border shadow-lg "
      >
        <HiddenMenu />
      </div>
    </>
  );
};

export default Navbar;
