import AdminNavbar from "../../../Components/adminNavbar";
import ReviewInboxPreview from "./ReviewInboxPreview";
import InboxMessage from "./inboxMessage";

const AdminReview = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden overflow-y-clip bg-WhiteBG dark:bg-BlackBG pb-28 pt-2">
        <AdminNavbar />
        <div className="flex h-full flex-row px-4">
          <div className="h-full w-96 overflow-y-scroll p-4 text-black dark:text-white bg-BlueGrey dark:bg-BlueBlack scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg rounded-l-xl border-r-2 border-Green dark:border-Blue">
            <div className="">
              <button className="border-l-0 hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
            </div>
          </div>
          <div className="h-full w-full overflow-y-scroll bg-LightBlueGrey dark:bg-LightBlueBlack  p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg rounded-r-xl">
            <InboxMessage />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReview;
