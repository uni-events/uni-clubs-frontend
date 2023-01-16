import React from "react";
import pfp from "../Assets/pfp.png";

import { NavLink } from "react-router-dom";
import { Toggle } from "../Theme/toggle";
const AdminNavbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-30 p-2 mx-auto bg-WhiteBG dark:bg-BlackBG bg-opacity-95 h-fit duration-ThemeDuration">
        <div className="flex items-center justify-between">
          <button className="h-full p-2 w-fit md:hidden">
            <svg
              className="fill-Blue"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
            </svg>
          </button>
          <div className="flex mx-auto md:mx-0 md:space-x-12 md:m-0">
            <NavLink
              to="/dashboard"
              className="text-4xl font-extrabold text-transparent hover:animate-text bg-gradient-to-r from-Green hover:via-Blue to-Blue hover:to-Green bg-clip-text"
            >
              Uni Clubs Admin
            </NavLink>

            <NavLink
              to="/club-details"
              className="hidden mt-1 transition-all duration-75 ease-in-out md:block group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Club Details
              </span>
            </NavLink>
            <NavLink
              to="/manage-events"
              className="hidden mt-1 transition-all duration-75 ease-in-out md:block group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Manage Events
              </span>
            </NavLink>

            <NavLink
              to="/reviews"
              className="hidden mt-1 transition-all duration-75 ease-in-out md:block group text-Blue hover:text-Green active:text-DarkGreen"
            >
              <span className="text-2xl font-bold bg-bottom bg-gradient-to-r from-Green to-Green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out underline-offset-4">
                Inbox
              </span>
            </NavLink>
          </div>
          <div className="flex-row hidden sm:flex md:space-x-4">
            <div className="hidden md:block">
              <Toggle />
            </div>
            <NavLink to="/" className="duration-ThemeDuration hover:scale-105 ">
              <img
                className="object-cover w-10 h-10 bg-center rounded-lg min-w-[2.5rem]"
                src={pfp}
                alt="pfp"
              />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
