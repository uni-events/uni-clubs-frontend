import { NavLink } from "react-router-dom";

import screen2 from "../../../Assets/screen2.png";
import screen3 from "../../../Assets/screen3.png";

import "animate.css";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const EventInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex w-full h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <div className="flex flex-col items-center justify-center mx-auto space-x-8 space-y-8 lg:flex-row">
          <div className="px-4">
            <img
              className="block dark:hidden w-96 md:w-168 drop-shadow-lg"
              src={screen2}
              alt="screen"
            />
            <img
              className="hidden dark:block w-96 md:w-168 drop-shadow-lg"
              src={screen3}
              alt="screen"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <NavLink
                to="/discover"
                className="text-4xl font-extrabold text-transparent md:text-6xl animate-text bg-gradient-to-r from-Green to-Blue bg-clip-text"
              >
                Find Events
              </NavLink>
            </div>
            <div className="space-y-4">
              <p className="max-w-md text-lg font-semibold md:text-xl text-DarkBlue dark:text-Blue">
                Find Clubs you like.
              </p>
              <p className="max-w-md text-lg font-semibold md:text-xl text-DarkBlue dark:text-Blue">
                Discover Opportunities and be a part of what you love to do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventInfo;
