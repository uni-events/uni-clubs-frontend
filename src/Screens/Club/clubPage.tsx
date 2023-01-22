import CommonFooter from "../../Components/commonFooter";
import Navbar from "../../Components/navbar";
import ClubInfo from "./info";

const ClubPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <Navbar />
        <div className="w-full h-full max-w-screen-xl mx-auto">
          <ClubInfo />
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default ClubPage;
