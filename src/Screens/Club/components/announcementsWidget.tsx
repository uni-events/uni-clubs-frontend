import { longStr } from "../../../Data/dataTypes";

const AnnouncementCard = () => {
  return (
    <>
      <div className="snap-center h-96 w-full rounded-2xl text-black bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG p-4">
        <div>
          <h1 className="text-lg font-bold mb-2">New Merch Release!</h1>
          <p className="text-sm font-light h-64 overflow-hidden">
            {longStr}
            {longStr}
            {longStr}
            {longStr}
            {longStr}
          </p>
        </div>
        <button className="float-left ">
          <p className="text-sm font-bold">read more ...</p>
        </button>
      </div>
    </>
  );
};
const AnnouncementsWidget = () => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Recent Announcements
        </h1>
        <div className="snap-y mt-4 align-middle snap-mandatory max-w-4xl h-96 pr-2 space-y-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
          <AnnouncementCard />
          <AnnouncementCard />
          <AnnouncementCard />
        </div>
      </div>
    </>
  );
};

export default AnnouncementsWidget;
