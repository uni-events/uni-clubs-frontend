import React from "react";
import pfp from "../Assets/pfp.png";

import { NavLink } from "react-router-dom";
const AdminNavbar = () => {
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
              to="/dashboard"
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-Green to-Blue"
            >
              Uni Clubs Admin
            </NavLink>
            <NavLink
              to="/club-details"
              className="text-Blue text-2xl font-bold hover:text-Green hover:underline underline-offset-4 mt-1 hidden md:flex"
            >
              Club Details
            </NavLink>

            <NavLink
              to="/manage-events"
              className="text-Blue text-2xl font-bold hover:text-Green hover:underline underline-offset-4 mt-1 hidden md:flex"
            >
              Manage Events
            </NavLink>
            <NavLink
              to="/reviews"
              className="text-Blue text-2xl font-bold hover:text-Green hover:underline underline-offset-4 mt-1 hidden md:flex"
            >
              Reviews
            </NavLink>
          </div>
          <NavLink to="/" className="">
            <img className="h-10 w-10 rounded-xl" src={pfp} alt="pfp" />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
