import AdminNavbar from "../../../Components/adminNavbar";
import CommonFooter from "../../../Components/commonFooter";
import ViewAllEventCards from "./eventCardList";

const ManageEvents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full h-screen bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <div className="bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
          <AdminNavbar />
          <div className="flex flex-col px-4 mx-auto my-12 space-y-8 h-fit max-w-screen-xxl">
            <ViewAllEventCards />
          </div>
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default ManageEvents;
