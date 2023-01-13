import React from "react";

import { NavLink } from "react-router-dom";
import { Toggle } from "../Theme/toggle";
const LoginNavbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-30 p-6 mx-auto bg-WhiteBG dark:bg-BlackBG bg-opacity-95 h-fit duration-ThemeDuration">
        <div className="flex items-center justify-between">
          <button className="block md:hidden">
            <svg
              className="fill-Blue"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
            >
              <path d="M5 30v-2.792h30V30Zm0-8.625v-2.75h30v2.75Zm0-8.583V10h30v2.792Z" />
            </svg>
          </button>
          <div className="flex md:space-x-12 xs:mx-auto md:m-0">
            <NavLink
              to="/"
              className="text-4xl font-extrabold text-transparent hover:animate-text bg-gradient-to-r from-Green hover:via-Blue to-Blue hover:to-Green bg-clip-text"
            >
              Uni Clubs Admin
            </NavLink>
          </div>
          <Toggle />
        </div>
      </nav>
    </>
  );
};

export default LoginNavbar;
