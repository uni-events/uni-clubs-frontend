import SingleEventCard from "./singleEventCard";

const EventOfTheDay = () => {
  return (
    <>
      <div className="w-full h-full mt-8 space-y-4">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Events of the Day
        </h1>
        <div className="grid grid-cols-5 space-x-4 grid-rows-auto bg-slate-500">
          <SingleEventCard />
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
    </>
  );
};

export default EventOfTheDay;
