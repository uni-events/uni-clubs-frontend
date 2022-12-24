import AdminNavbar from "../../../Components/adminNavbar";
import Event from "./Event";

const ManageEvents = () => {
  return (
    <>
      <div className="w-screen h-screen items-center bg-WhiteBG dark:bg-BlackBG overflow-x-hidden">
        <AdminNavbar />
        <div className="grid grid-cols-1 my-12 max-w-screen-xl xl:w-3/4 mx-8 lg:mx-auto lg:px-8 content-center gap-8">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
