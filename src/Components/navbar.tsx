import React from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-30 bg-WhiteBG dark:bg-BlackBG bg-opacity-95 h-fit mx-auto p-6 ">
        <div className="flex items-center justify-between">
          <button className="block md:hidden">
            <svg
              className="fill-Blue"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              viewBox=" 0 0 40 40"
            >
              <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
            </svg>
          </button>
          <div className="flex md:space-x-12 xs:mx-auto md:m-0">
            <NavLink
              to="/"
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-Green to-Blue"
            >
              Uni Clubs
            </NavLink>
            <NavLink
              to="/discover"
              className="text-Blue text-2xl font-bold hover:text-Green hover:underline underline-offset-4 mt-1 hidden md:flex"
            >
              Discover
            </NavLink>
            <NavLink
              to="/events"
              className="text-Blue text-2xl font-bold hover:text-Green hover:underline underline-offset-4 mt-1 hidden md:flex"
            >
              Events
            </NavLink>
            <NavLink
              to="/Announcements"
              className="text-Blue text-2xl font-bold hover:text-Green hover:underline underline-offset-4 mt-1 hidden md:flex"
            >
              Announcements
            </NavLink>
          </div>
          <button className="bg-Blue h-fit w-fit px-4 py-2 rounded-lg xs:hidden md:block hover:bg-Green">
            <NavLink
              to="/login"
              className="text-WhiteBG text-xl font-bold mt-1 "
            >
              Login
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
