import React from "react";
import SingleEventCard from "./singleEventCard";

const TrendingEvents = () => {
  return (
    <>
      <div className="w-full mt-4 space-y-4 h-fit">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Trending Events
        </h1>
        <div className="flex flex-row pb-2 space-x-4 overflow-x-scroll snap-x snap-mandatory flex-nowrap scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
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
