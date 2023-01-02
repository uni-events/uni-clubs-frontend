import Navbar from "../../Components/navbar";
import SearchBar from "../Discover/components/searchbar";
// import EventOfTheDay from "./components/eventsOfDay";
import EventsFilter from "./components/filter";

import TrendingEvents from "./components/trendingEvents";

const EventPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />
        <div className="flex flex-row w-full h-full max-w-7xl  mx-auto p-4">
          <div className="w-72 max-w-xl h-fit">
            <EventsFilter />
          </div>

          <div className="flex flex-col max-w-4xl">
            <SearchBar />
            <div className="flex flex-col h-full p-8">
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
