import AdminNavbar from "../../../Components/adminNavbar";
import Inbox from "./inbox";

const AdminReview = () => {
  return (
    <>
      <div className="w-screen h-screen items-center bg-WhiteBG dark:bg-BlackBG overflow-x-hidden overflow-y-hidden">
        <AdminNavbar />

        <div className="h-full w-full mx-auto bg-LightBlueGrey dark:bg-BlueBlack">
          <Inbox />
        </div>
      </div>
    </>
  );
};

export default AdminReview;
