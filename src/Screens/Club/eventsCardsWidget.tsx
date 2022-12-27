import EventCard from "./components/eventCard";

const EventsCardsWidget = () => {
  return (
    <>
      <div className="snap-y snap-mandatory max-w-4xl h-128 overflow-y-scroll overflow-x-hidden bg-red-200">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
};
export default EventsCardsWidget;
