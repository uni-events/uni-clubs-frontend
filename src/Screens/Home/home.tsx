import Navbar from "../../Components/navbar";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden duration-ThemeDuration">
        <Navbar />
        <h1 className="dark:text-WhiteBG margin-auto">
          You are on the Home Page
        </h1>
      </div>
    </>
  );
};

export default Home;
