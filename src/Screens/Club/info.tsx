import logo from "../../Assets/RGS-logo.png";
import ExecutiveCard from "./components/executivesCard";
import SocialsCard from "./components/socialsCard";
import EventsCardsWidget from "./eventsCardsWidget";
import MerchandiseWidget from "./merchandiseWidget";
const ClubInfo = () => {
  const longStr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae massa in rutrum. Maecenas nec consectetur libero. Fusce in dapibus tortor, sit amet faucibus arcu. Suspendisse vel nunc turpis. Pellentesque justo risus, gravida et metus id, vestibulum rutrum libero. Donec molestie vehicula ornare. Quisque ultrices odio ac ante tincidunt egestas.";
  return (
    <>
      <div>
        <div
          className="bg-fixed h-40 md:h-96"
          style={{
            backgroundImage: `url(${require("../../Assets/page-banner.png")})`,
          }}
        />
        <div className="bg-WhiteBG dark:bg-BlackBG p-4 mx-6 md:mx-12">
          <img
            className="-translate-y-12 h-24 w-24 md:h-32 md:w-32 md:-translate-y-24 bg-center object-cover drop-shadow-lg"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col md:grid md:grid-cols-4 -translate-y-12 md:-translate-y-24 mt-8 space-y-8">
            <div className="flex flex-col md:col-span-3">
              <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
                Club Name Club Name (CN CN)
              </h1>
              <p className=" text-md mt-4 text-black dark:text-WhiteBG max-w-4xl">
                {longStr}
              </p>
              <EventsCardsWidget />
            </div>
            <div className="flex flex-col md:col-span-1 space-y-8">
              <ExecutiveCard />
              <SocialsCard />
            </div>
          </div>
          <div className="-translate-y-12 md:-translate-y-24 mt-12">
            <MerchandiseWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubInfo;
