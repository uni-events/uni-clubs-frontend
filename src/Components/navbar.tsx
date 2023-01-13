import React from "react";

import { NavLink } from "react-router-dom";
import { Toggle } from "../Theme/toggle";
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-30 p-6 mx-auto bg-WhiteBG dark:bg-BlackBG bg-opacity-95 h-fit duration-ThemeDuration">
        <div className="flex items-center justify-between">
          <button className="h-full w-fit md:hidden">
            <svg
              className="fill-Blue"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
            </svg>
          </button>
          <div className="flex md:space-x-12 xs:mx-auto md:m-0">
            <NavLink
              to="/"
              className="text-4xl font-extrabold text-transparent hover:animate-text bg-gradient-to-r from-Green hover:via-Blue to-Blue hover:to-Green bg-clip-text"
            >
              Uni Clubs
            </NavLink>
            <NavLink
              to="/discover"
              className="hidden mt-1 text-4xl transition-all duration-75 ease-in-out md:flex group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-left-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Discover
              </span>
            </NavLink>
            <NavLink
              to="/events"
              className="hidden mt-1 transition-all duration-75 ease-in-out group text-Blue hover:text-Green active:text-DarkGreen md:flex "
            >
              <span className="text-2xl font-bold bg-left-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Events
              </span>
            </NavLink>
            <NavLink
              to="/Announcements"
              className="hidden mt-1 transition-all duration-75 ease-in-out group text-Blue hover:text-Green active:text-DarkGreen md:flex "
            >
              <span className="text-2xl font-bold bg-left-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Announcements
              </span>
            </NavLink>
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <Toggle />
            <button className="hidden px-4 py-2 rounded-lg duration-ThemeDuration bg-gradient-to-bl hover:bg-gradient-to-tr from-Green to-Blue active:from-DarkGreen active:to-DarkBlue h-fit w-fit md:block hover:scale-105">
              <NavLink
                to="/login"
                className="mt-1 text-xl font-bold text-WhiteBG"
              >
                Login
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
