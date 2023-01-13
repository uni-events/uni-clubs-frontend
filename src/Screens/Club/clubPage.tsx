import Navbar from "../../Components/navbar";
import ClubInfo from "./info";

const ClubPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <Navbar />
        <h1 className="w-full h-full max-w-screen-xl mx-auto">
          <ClubInfo />
        </h1>
      </div>
    </>
  );
};

export default ClubPage;
