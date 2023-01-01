import React from "react";
import SingleEventCard from "./singleEventCard";

const TrendingEvents = () => {
  return (
    <>
      <div className="w-full h-fit space-y-4 mt-4">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Trending Events
        </h1>
        <div className="flex snap-x snap-mandatory flex-row flex-nowrap space-x-4 pb-2 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
          <SingleEventCard />
          <SingleEventCard />
          <SingleEventCard />
          <SingleEventCard />
          <SingleEventCard />
          <SingleEventCard />
          <SingleEventCard />
        </div>
      </div>
    </>
  );
};

export default TrendingEvents;
