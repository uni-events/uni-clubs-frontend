import CommonFooter from "../../Components/commonFooter";
import Navbar from "../../Components/navbar";
import { longStr } from "../../Data/dataTypes";
import DetailedEventTile from "../Events/components/detailedEventTile";

const AnnouncementPage = () => {
  const eventDetails: {
    name: string;
    description: string;
    logo: string;
    banner: string;
    event: string;
    tags: string[];
    categories: string[];
  } = {
    name: "Cat Appreciation Society",
    description: longStr,
    logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    event: "Cat Petting Stall",
    tags: ["free", "no-food"],
    categories: ["Hobby"],
  };
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
      <div className="bg-WhiteBG dark:bg-BlackBG">
        <Navbar />
        <div className="items-center mx-auto h-fit">
          <DetailedEventTile eventInfo={eventDetails} />
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default AnnouncementPage;
