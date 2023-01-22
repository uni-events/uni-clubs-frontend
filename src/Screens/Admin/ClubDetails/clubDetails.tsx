import AdminNavbar from "../../../Components/adminNavbar";
import CommonFooter from "../../../Components/commonFooter";
import ClubDescription from "./clubDescription";
import ClubSocials from "./clubSocials";

const ClubDetails = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-screen bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <div className="bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
          <AdminNavbar />
          <div className="grid content-center max-w-screen-xl grid-flow-row grid-cols-1 gap-8 mx-8 my-12 xl:w-11/12 lg:mx-auto lg:px-8">
            <ClubDescription />
            <ClubSocials />
          </div>
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default ClubDetails;
