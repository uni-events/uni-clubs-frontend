import Navbar from "../../Components/navbar";
import SingleEventCard from "./components/eventCard";

const EventPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />

        <div className="w-full h-full max-w-7xl mx-auto">
          <div className="space-y-4 mt-4">
            <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
              Trending Events
            </h1>
            <div className="flex flex-row space-x-4 pb-2 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
              Events of the Day
            </h1>
            <div className="flex flex-row space-x-4 pb-2 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
              <SingleEventCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
