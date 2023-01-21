import { useState } from "react";
import Navbar from "../../Components/navbar";
import SearchBar from "../Discover/components/searchbar";
// import EventOfTheDay from "./components/eventsOfDay";
import EventsFilter from "./components/filter";

import { TagsData } from "../../Data/dataTypes";
import EventTiles from "./components/eventTiles";
import EventsType from "./components/eventType";

const EventPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [purpose, setPurpose] = useState("EventsOfDay");

  const handleSearch = (query: string) => {
    setSearchInput(query);
  };
  const tagsInit: TagsData = {
    filters: [],
    categories: ["All"],
  };
  const [tags, setTags] = useState({ ...tagsInit });
  const handleFilters = (sortTags: TagsData) => {
    setTags({ ...sortTags });
  };
  const handleEventType = (type: string) => {
    setPurpose(type);
  };

  return (
    <>
      <div className="w-screen h-full overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <Navbar />
        <div className="flex flex-row w-full h-full max-w-screen-xl px-2 mx-auto my-4 md:space-x-4 md:px-4">
          <div className="hidden space-y-4 md:block md:w-1/4 h-fit">
            <EventsType onChange={handleEventType} />
            <EventsFilter onChange={handleFilters} />
          </div>
          <div className="flex flex-col w-full px-2 md:w-3/4">
            <div className="flex flex-row space-x-4 md:space-x-0">
              <button
                className="block p-3 rounded-lg md:hidden bg-BlueGrey dark:bg-BlueBlack h-fit w-fit"
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
              <SearchBar purpose="Events" onChange={handleSearch} />
            </div>

            <div
              className={`flex flex-col space-y-4 ${
                showFilter ? "hidden md:block" : "block"
              }`}
            >
              <EventTiles purpose={purpose} />
            </div>
            <div
              className={`w-full h-fit mt-8 space-y-4 ${
                showFilter ? "block md:hidden" : "hidden"
              }`}
            >
              <EventsType onChange={handleEventType} />
              <EventsFilter onChange={handleFilters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
