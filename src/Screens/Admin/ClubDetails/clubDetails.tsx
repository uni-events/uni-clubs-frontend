import AdminNavbar from "../../../Components/adminNavbar";
import ClubDescription from "./clubDescription";
import ClubSocials from "./clubSocials";

const ClubDetails = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG overflow-x-hidden">
        <AdminNavbar />
        <div className="grid grid-cols-1 grid-flow-row max-w-screen-xl xl:w-11/12 mx-8 lg:mx-auto lg:px-8 content-center gap-8 my-12">
          <ClubDescription />
          <ClubSocials />
        </div>
      </div>
    </>
  );
};

export default ClubDetails;
