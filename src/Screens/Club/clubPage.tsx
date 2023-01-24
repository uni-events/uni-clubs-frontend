import CommonFooter from "../../Components/commonFooter";
import Navbar from "../../Components/navbar";
import ClubInfo from "./info";

const ClubPage = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-screen bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <div className="bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
          <Navbar />
          <div className="w-full h-full max-w-screen-xl mx-auto">
            <ClubInfo />
          </div>
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default ClubPage;
