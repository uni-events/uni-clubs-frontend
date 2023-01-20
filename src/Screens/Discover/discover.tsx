import Navbar from "../../Components/navbar";
import ClubTiles from "./components/ClubTiles/clubTiles";
import SearchBar from "./components/searchbar";
import { useState } from "react";
import DiscoverFilter from "./components/filter";
import { TagsData } from "../../Data/dataTypes";

const Discover = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const tagsInit: TagsData = {
    filters: [],
    categories: ["All"],
  };
  const [tags, setTags] = useState({ ...tagsInit });

  const handleSearch = (query: string) => {
    setSearchInput(query);
  };

  const handleFilters = (sortTags: TagsData) => {
    setTags({ ...sortTags });
  };

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <Navbar />
        <div className="flex flex-col-reverse max-w-screen-xl mx-auto my-4 md:pl-4 md:flex-row ">
          <div
            className={`px-4 my-6 w-full h-full md:w-1/4 md:my-0 md:px-0 ${
              showFilter ? "block" : "hidden md:block"
            }`}
          >
            <DiscoverFilter onChange={handleFilters} />
          </div>
          <div className="block w-full px-4 space-y-4 md:w-3/4">
            <div className="flex flex-row space-x-4 md:space-x-0">
              <button
                className="p-3 rounded-lg bg-BlueGrey h-fit w-fit xs:block md:hidden dark:bg-BlueBlack"
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
              <div className="flex w-full">
                <SearchBar purpose="Clubs" onChange={handleSearch} />
              </div>
            </div>
            <div className={`${showFilter ? "hidden md:block" : "block"}`}>
              <ClubTiles
                searchQuery={searchInput}
                filterTags={tags.filters}
                categoryTags={tags.categories}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
