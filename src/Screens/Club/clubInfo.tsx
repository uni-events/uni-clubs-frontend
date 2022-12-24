import Navbar from "../../Components/navbar";

const ClubPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />
        <h1 className="dark:text-WhiteBG margin-auto">
          You are on the Club Info page
        </h1>
      </div>
    </>
  );
};

export default ClubPage;
