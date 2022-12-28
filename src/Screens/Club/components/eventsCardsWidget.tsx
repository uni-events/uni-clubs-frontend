import EventCard from "./eventCard";

const EventsCardsWidget = () => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Upcoming Events
        </h1>
        <div className="snap-y mt-4 align-middle snap-mandatory max-w-4xl h-96 pr-2 space-y-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
};
export default EventsCardsWidget;
