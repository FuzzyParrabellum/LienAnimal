"use client";

import { useState, useEffect } from "react";

export const LightDarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    // setDarkMode(savedMode === "dark" ? true : false)
    if (darkMode) {
      savedMode = "dark";
      // will add dark to html element
      document.documentElement.classList.add("dark");
      localStorage.setItem("displayMode", savedMode);
    } else {
      savedMode = "light";
      document.documentElement.classList.remove("dark");
      localStorage.setItem("displayMode", savedMode);
    }
  }, [darkMode]);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button
        id="theme-toggle-btn"
        onClick={() => {
          toggleDisplayMode();
        }}
        className="  text-3xl text-amber-300 dark:text-animallight h-[48px] w-[48px] "
      >
        {darkMode ? "☽" : "☼"}
      </button>
    </>
  );
};
