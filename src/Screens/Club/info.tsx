import logo from "../../Assets/RGS-logo.png";
import ExecutiveCard from "./components/executivesCard";
import SocialsCard from "./components/socialsCard";
import MerchandiseWidget from "./components/merchandiseWidget";
import AnnouncementsWidget from "./components/announcementsWidget";
import FeesCard from "./components/feesCard";
import EventsCarousel from "./components/eventsCarousel";
import { longStr } from "../../Data/dataTypes";

const ClubInfo = () => {
  return (
    <>
      <div>
        <div
          className="h-40 bg-fixed bg-no-repeat md:h-96"
          style={{
            backgroundImage: `url(${require("../../Assets/page-banner.png")})`,
          }}
        />
        <div className="p-4 mx-6 bg-WhiteBG dark:bg-BlackBG md:mx-12 duration-ThemeDuration">
          <img
            className="object-cover w-24 h-24 -translate-y-12 bg-center md:h-32 md:w-32 md:-translate-y-24 drop-shadow-lg"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col mt-8 space-y-8 -translate-y-12 md:grid md:grid-cols-4 md:-translate-y-24 md:space-x-4">
            <div className="flex flex-col md:col-span-3">
              <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
                Club Name Club Name (CN CN)
              </h1>
              <p className="max-w-4xl mt-4 text-base text-black dark:text-WhiteBG">
                {longStr}
              </p>
              <EventsCarousel />
              <AnnouncementsWidget />
            </div>
            <div className="flex flex-col space-y-8 md:col-span-1">
              <ExecutiveCard />
              <FeesCard />
              <SocialsCard />
            </div>
          </div>
          <div className="mt-12 -translate-y-12 md:-translate-y-24">
            <MerchandiseWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubInfo;
