import CommonFooter from "../../Components/commonFooter";
import Navbar from "../../Components/navbar";

const AnnouncementPage = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
      <div className="bg-WhiteBG dark:bg-BlackBG">
        <Navbar />
        <div className="flex flex-col min-h-screen my-auto text-center align-middle">
          <h1 className="text-xl font-semibold text-Blue dark:text-white">
            ⚠️ Announcements Page is Yet To Be Completed
          </h1>
          {/* <DetailedEventTile eventInfo={eventDetails} /> */}
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default AnnouncementPage;
