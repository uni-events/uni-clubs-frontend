import Navbar from "../../Components/navbar";
import ClubInfo from "./info";

const ClubPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />
        <h1 className="w-full lg:w-3/4 h-full mx-auto">
          <ClubInfo />
        </h1>
      </div>
    </>
  );
};

export default ClubPage;
