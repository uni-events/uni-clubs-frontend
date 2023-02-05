import { useState } from "react";
import Navbar from "../../Components/navbar";
import SearchBar from "../Discover/components/searchbar";
// import EventOfTheDay from "./components/eventsOfDay";
import EventsFilter from "./components/filter";

import { TagsData, longStr } from "../../Data/dataTypes";
import EventTiles from "./components/eventTiles";
import EventsType from "./components/eventType";
import CommonFooter from "../../Components/commonFooter";
import DetailedEventTile from "./components/detailedEventTile";

import axios from "axios";
import { BackendURL } from "../../Data/config";
import { eventDetails } from "../../Data/DummyData";
axios.defaults.baseURL = BackendURL;

const EventPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [purpose, setPurpose] = useState("EventsOfDay");
  const [showEvent, setShowEvent] = useState(false);
  const [eventData, setEventData] = useState(eventDetails);

  axios
    .get("/events-data")
    .then((response) => {
      setEventData(response.data);
    })
    .catch((error) => {
      console.log("encountered while fetching event details: ", error.message);
    });

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
    if (sortTags.categories.includes("All") && sortTags.filters.length === 0) {
      setEventData([...eventDetails]);
    } else {
      filterEvents({ ...sortTags });
    }
  };

  const filterEvents = (filterTags: TagsData) => {
    let filteredEventData;
    let doReturnEventFinal: boolean = true;
    // first filtering based on categories
    filteredEventData = eventDetails.filter((event, index) => {
      if (filterTags.categories.includes("All")) {
        return event;
      }
      doReturnEventFinal = false;
      for (const category of filterTags.categories) {
        if (event.categories.includes(category)) {
          doReturnEventFinal = true;
        }
      }
      return doReturnEventFinal && event;
    });
    // then filtering based on filter tags
    filteredEventData = filteredEventData.filter((event, index) => {
      doReturnEventFinal = true;
      // if no filters apply return all events
      if (filterTags.filters.length === 0) {
        return event;
      }
      for (const tag of filterTags.filters) {
        if (event.tags.includes(tag)) {
        } else {
          doReturnEventFinal = false;
        }
      }
      return doReturnEventFinal && event;
    });

    setEventData([...filteredEventData]);
  };

  const handleEventType = (type: string) => {
    setPurpose(type);
  };

  const eventInit = {
    clubStr: "",
    name: "",
    description: "",
    event: "",
    logo: "",
    banner: "",
    tags: ["", ""],
    categories: [""],
  };
  const [activeEvent, setActiveEvent] = useState(eventInit);
  const handleEventSelection = (event: any) => {
    setActiveEvent(event);
    setShowEvent(true);
  };
  const handleClose = (doClose: boolean) => {
    setShowEvent(doClose);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-between w-full h-screen bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration ${
          showEvent && "max-h-screen overflow-hidden"
        }`}
      >
        {showEvent && (
          <DetailedEventTile eventInfo={activeEvent} onChange={handleClose} />
        )}
        <div
          className={`bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration ${
            showEvent && "h-screen"
          }`}
        >
          <Navbar />
          <div className="flex flex-row w-full px-2 mx-auto my-4 h-fit max-w-screen-xxl md:space-x-4 md:px-4">
            <div className="hidden space-y-4 md:block md:w-1/4 h-fit">
              <EventsType onChange={handleEventType} />
              <EventsFilter onChange={handleFilters} />
            </div>
            <div className="flex flex-col w-full px-2 md:w-3/4">
              <div className="flex flex-row space-x-4 md:space-x-0">
                <button
                  className="block p-3 rounded-lg md:hidden bg-BlueGrey dark:bg-BlueBlack h-fit w-fit drop-shadow-sm"
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
                <EventTiles
                  purpose={purpose}
                  onChange={handleEventSelection}
                  eventData={eventData}
                />
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
        <div className={`${showEvent ? "hidden" : "block"}`}>
          <CommonFooter />
        </div>
      </div>
    </>
  );
};

export default EventPage;
