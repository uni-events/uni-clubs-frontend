import { useState } from "react";
import Navbar from "../../Components/navbar";
import SearchBar from "../Discover/components/searchbar";
// import EventOfTheDay from "./components/eventsOfDay";
import EventsFilter from "./components/filter";

import TrendingEvents from "./components/trendingEvents";

const EventPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG overflow-x-hidden">
        <Navbar />
        <div className="flex flex-row w-full h-full max-w-screen-xl mx-auto grid-cols-3 space-x-4">
          <div
            className={`w-1/4 h-fit col-span-1 hidden lg:block ${
              showFilter ? "block" : "hidden md:block"
            }`}
          >
            <EventsFilter />
          </div>

          <div className="flex flex-col w-full lg:w-3/4 grid-cols-2">
            <div className="flex flex-row space-x-4">
              <SearchBar purpose="Events" />
              <button
                className="bg-BlueGrey dark:bg-BlueBlack h-fit w-fit p-3 rounded-lg"
                onClick={() => setShowFilter(!showFilter)}
              >
                <svg
                  className="fill-black dark:fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <TrendingEvents />
              <TrendingEvents />
              <TrendingEvents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
