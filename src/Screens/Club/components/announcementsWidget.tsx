import { longStr } from "../../../Data/dataTypes";

const AnnouncementCard = () => {
  return (
    <>
      <div className="w-full p-4 text-black snap-center h-96 rounded-2xl bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
        <div>
          <h1 className="mb-2 text-lg font-bold">New Merch Release!</h1>
          <p className="h-64 overflow-hidden text-sm font-light">
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
        <div className="max-w-4xl pr-2 mt-4 space-y-4 overflow-x-hidden overflow-y-scroll align-middle snap-y snap-mandatory h-96 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
          <AnnouncementCard />
          <AnnouncementCard />
          <AnnouncementCard />
        </div>
      </div>
    </>
  );
};

export default AnnouncementsWidget;
