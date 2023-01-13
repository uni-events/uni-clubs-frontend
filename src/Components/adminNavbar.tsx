import React from "react";
import pfp from "../Assets/pfp.png";

import { NavLink } from "react-router-dom";
import { Toggle } from "../Theme/toggle";
const AdminNavbar = () => {
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
              to="/dashboard"
              className="text-4xl font-extrabold text-transparent hover:animate-text bg-gradient-to-r from-Green hover:via-Blue to-Blue hover:to-Green bg-clip-text"
            >
              Uni Clubs Admin
            </NavLink>
            <NavLink
              to="/club-details"
              className="mt-1 transition-all duration-75 ease-in-out group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-left-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Club Details
              </span>
            </NavLink>
            <NavLink
              to="/manage-events"
              className="mt-1 transition-all duration-75 ease-in-out group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-left-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Manage Events
              </span>
            </NavLink>

            <NavLink
              to="/reviews"
              className="mt-1 transition-all duration-75 ease-in-out group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-left-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Inbox
              </span>
            </NavLink>
          </div>
          <div className="flex flex-row space-x-4">
            <Toggle />
            <NavLink to="/" className="duration-ThemeDuration hover:scale-105">
              <img className="w-10 h-10 rounded-xl" src={pfp} alt="pfp" />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
