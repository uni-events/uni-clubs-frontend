const SingleEventTile = ({
  eventDetails,
}: {
  eventDetails: {
    name: string;
    description: string;
    logo: string;
    banner: string;
    event: string;
    tags: string[];
    categories: string[];
  };
}) => {
  return (
    <div className="text-left w-full rounded-lg h-fit hover:scale-[101%] bg-BlueGrey dark:bg-BlueBlack duration-ThemeDuration">
      <div className="w-full p-2 rounded-t-lg h-44 ">
        <img
          className="object-cover w-full h-24 bg-center rounded-lg"
          src={eventDetails.banner}
          alt="banner"
        />
        <div className="w-full p-2 text-black h-fit dark:text-white">
          <h1 className="text-xl font-bold">{eventDetails.event}</h1>
          <h1 className="text-base font-semibold">{eventDetails.name}</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full px-4 border border-t-2 rounded-b-lg h-28 border-LightBlueGrey dark:border-LightBlueBlack ">
        <div className="flex flex-col">
          <h1 className="font-semibold text-black dark:text-white">
            Date:
            <p className="inline text-base font-normal">12th December 2:00pm</p>
          </h1>
          <h1 className="font-semibold text-black dark:text-white">
            Location:&nbsp;
            <p className="inline text-base font-normal">Webster Building 204</p>
          </h1>
          <h1 className="font-semibold text-black dark:text-white">
            Time:&nbsp;
            <p className="inline text-base font-normal">2:00pm - 5:00pm</p>
          </h1>
          <h1 className="font-semibold text-black dark:text-white">
            Food:&nbsp;
            <p className="inline text-base font-normal">Pizza</p>
          </h1>
        </div>
        <div className="flex flex-col justify-center p-2">
          <img
            src={eventDetails.logo}
            className="object-cover w-16 h-16 rounded-lg "
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
export default SingleEventTile;
