import Navbar from "../../Components/navbar";

const EventPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />
        <h1 className="w-full lg:w-3/4 h-full mx-auto">Events Page</h1>
      </div>
    </>
  );
};

export default EventPage;
