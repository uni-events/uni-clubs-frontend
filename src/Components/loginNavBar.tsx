import React from "react";

import { NavLink } from "react-router-dom";
const LoginNavbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-30 bg-WhiteBG dark:bg-BlueBlack h-fit mx-auto p-6">
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
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-Green to-Blue"
            >
              Uni Clubs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoginNavbar;
