import banner from "../../../Assets/page-banner.png";
const EventCard = () => {
  return (
    <>
      <div className="snap-end w-full h-full drop-shadow-md">
        <img
          className="h-96 w-full object-cover bg-center rounded-3xl"
          src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
          alt="event banner"
        />
        <div className="w-fit h-fit rounded-lg p-4 text-xl font-bold text-black bg-WhiteBG dark:bg-BlueBlack dark:text-WhiteBG -translate-y-24 translate-x-10 drop-shadow-lg">
          Weekly Meetup
        </div>
      </div>
    </>
  );
};
export default EventCard;
