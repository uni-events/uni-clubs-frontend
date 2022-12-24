import Navbar from "../../Components/navbar";
import ClubTiles from "./components/ClubTiles/clubTiles";
import SearchBar from "./components/searchbar";
import Filter from "./components/filter";
import { useState } from "react";

const Discover = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG  overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col max-w-screen-xl mx-auto my-6 md:flex-row ">
          <div className="w-full block">
            <div className=" flex flex-row ">
              <div className="w-full">
                <SearchBar />
              </div>

              <button
                className="bg-BlueGrey h-12 w-12 px-2 mr-6 rounded-lg xs:block md:hidden dark:bg-BlueBlack"
                onClick={() => setShowFilter(!showFilter)}
              >
                <svg
                  className="fill-black dark:fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z" />
                </svg>
              </button>
            </div>
            <div className={`${showFilter ? "hidden md:block" : "block"}`}>
              <ClubTiles />
            </div>
          </div>
          <div
            className={`px-6 my-6 md:my-0 md:px-0 ${
              showFilter ? "block" : "hidden md:block"
            }`}
          >
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
