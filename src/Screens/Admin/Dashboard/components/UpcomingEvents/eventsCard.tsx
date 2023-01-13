import Event from "./event";
const EventCard = () => {
  return (
    <>
      <div className="w-full p-4 rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
        <div className="flex flex-row justify-between px-4 py-2">
          <h1 className="text-2xl font-bold">Upcoming Events</h1>
          <svg
            className="mt-1 fill-black dark:fill-WhiteBG"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="M14.5 18q-1.05 0-1.775-.725Q12 16.55 12 15.5q0-1.05.725-1.775Q13.45 13 14.5 13q1.05 0 1.775.725Q17 14.45 17 15.5q0 1.05-.725 1.775Q15.55 18 14.5 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10ZM5 8h14V6H5Zm0 0V6v2Z" />
          </svg>
        </div>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </>
  );
};

export default EventCard;
