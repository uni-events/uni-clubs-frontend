import Navbar from "../../Components/navbar";

import DiscoverInfo from "./components/discoverInfo";
import EventInfo from "./components/eventInfo";

const Home = () => {
  return (
    <>
      <div className="w-screen max-h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <Navbar />
        <div className="w-screen h-full overflow-x-hidden overflow-y-scroll snap snap-y snap-proximity">
          <section className="w-screen h-screen bg-blue-200 snap-center">
            Section 2
          </section>
          <section className="w-screen h-screen bg-green-200 full snap-center">
            Section 3
          </section>
          <section className="w-screen h-screen bg-indigo-200 snap-center">
            Section 4
          </section>
          <section className="w-screen h-screen bg-yellow-200 snap-center">
            Section 5
          </section>
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
