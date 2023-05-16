import Navbar from "../../Components/navbar";

import DiscoverInfo from "./components/discoverInfo";
import EventInfo from "./components/eventInfo";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <Navbar />
        <div className="w-screen h-screen overflow-y-scroll -translate-y-12 snap snap-y snap-mandatory">
          <section className="w-screen h-screen snap-center">
            <DiscoverInfo />
          </section>
          <section className="w-screen h-full snap-center">
            <EventInfo />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
