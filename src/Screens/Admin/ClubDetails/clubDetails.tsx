import AdminNavbar from "../../../Components/adminNavbar";
import ClubDescription from "./clubDescription";
import ClubSocials from "./clubSocials";

const ClubDetails = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG">
        <AdminNavbar />
        <div className="grid content-center max-w-screen-xl grid-flow-row grid-cols-1 gap-8 mx-8 my-12 xl:w-11/12 lg:mx-auto lg:px-8">
          <ClubDescription />
          <ClubSocials />
        </div>
      </div>
    </>
  );
};

export default ClubDetails;
