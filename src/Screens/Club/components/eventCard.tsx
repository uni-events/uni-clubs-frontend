import banner from "../../../Assets/page-banner.png";
const EventCard = () => {
  return (
    <>
      <div className="snap-center w-full h-full drop-shadow-lg">
        <img
          className="h-96 w-full object-cover bg-center"
          src={banner}
          alt=""
        ></img>
      </div>
    </>
  );
};
export default EventCard;
