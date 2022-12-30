import Navbar from "../../Components/navbar";
import EventOfTheDay from "./components/eventsOfDay";

import TrendingEvents from "./components/trendingEvents";

const EventPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />
        <div className="w-full  h-full max-w-7xl mx-auto p-4">
          <div className="flex flex-col ">
            <TrendingEvents />
            {/* <EventOfTheDay /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
