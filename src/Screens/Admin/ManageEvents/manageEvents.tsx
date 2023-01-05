import AdminNavbar from "../../../Components/adminNavbar";
import Event from "./Event";
import TempEvent from "./TempEvent";

const ManageEvents = () => {
  return (
    <>
      <div className="w-screen h-screen items-center bg-WhiteBG dark:bg-BlackBG overflow-x-hidden">
        <AdminNavbar />
        <div className="flex flex-col mt-12 px-4 max-w-screen-xl mx-auto space-y-8">
          <TempEvent />
          {/* <Event />
          <Event />
          <Event />
          <Event /> */}
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
