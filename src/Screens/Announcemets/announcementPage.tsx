import CommonFooter from "../../Components/commonFooter";
import Navbar from "../../Components/navbar";
import { longStr } from "../../Data/dataTypes";

const AnnouncementPage = () => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-Blue">
      <Navbar />
      <div className="text-Green text-9xl">{longStr + longStr + longStr}</div>
      <CommonFooter />
    </div>
  );
};

export default AnnouncementPage;
