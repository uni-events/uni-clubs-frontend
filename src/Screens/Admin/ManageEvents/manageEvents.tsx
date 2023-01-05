import AdminNavbar from "../../../Components/adminNavbar";
import ViewAllEventCards from "./eventCardList";

const ManageEvents = () => {
  return (
    <>
      <div className="w-screen h-screen items-center bg-WhiteBG dark:bg-BlackBG overflow-x-hidden">
        <AdminNavbar />
        <div className="flex flex-col my-12 px-4 max-w-screen-xl mx-auto space-y-8">
          <ViewAllEventCards />
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
