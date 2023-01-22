import AdminNavbar from "../../../Components/adminNavbar";
import CommonFooter from "../../../Components/commonFooter";
import ViewAllEventCards from "./eventCardList";

const ManageEvents = () => {
  return (
    <>
      <div className="items-center w-full h-full overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <AdminNavbar />
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto my-12 space-y-8">
          <ViewAllEventCards />
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default ManageEvents;
