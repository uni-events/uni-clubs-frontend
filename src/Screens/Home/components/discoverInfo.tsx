import { NavLink } from "react-router-dom";
import screen1 from "../../../Assets/screen1.png";

import screen4 from "../../../Assets/screen4.png";

import "animate.css";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const DiscoverInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex w-full h-full overflow-x-hidden bg-WhiteBG dark:bg-BlackBG">
        <div className="flex flex-col items-center justify-center mx-auto space-x-8 space-y-8 lg:flex-row">
          <div data-aos="fade-right">
            <img
              className="block dark:hidden w-96 md:w-168 drop-shadow-lg"
              src={screen1}
              alt="screen"
            />
            <img
              className="hidden dark:block w-96 md:w-168 drop-shadow-lg"
              src={screen4}
              alt="screen"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div data-aos="fade-down">
              <NavLink
                to="/discover"
                className="text-4xl font-extrabold text-transparent md:text-6xl animate-text bg-gradient-to-r from-Green to-Blue bg-clip-text"
              >
                Discover Clubs
              </NavLink>
            </div>
            <div className="space-y-4" data-aos="fade-left">
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
export default DiscoverInfo;
