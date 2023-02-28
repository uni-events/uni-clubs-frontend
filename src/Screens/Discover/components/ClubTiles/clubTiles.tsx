import { NavLink } from "react-router-dom";
import { ClubTileData, longStr } from "../../../../Data/dataTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClubDataInit } from "../../../../Data/InitialiseData";

const ClubTiles = ({
  searchQuery,
  filterTags,
  categoryTags,
}: {
  searchQuery: string;
  filterTags: string[];
  categoryTags: string[];
}) => {
  const [ClubData, setClubData] = useState(ClubDataInit);
  const [isLoadingData, setIsLoadingData] = useState(true);
  useEffect(() => {
    axios
      .get("/clubs-data")
      .then((response) => {
        setClubData(response.data);
        setIsLoadingData(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isLoadingData]);

  // filters results based on search input words and queries
  let filteredList: ClubTileData[] = ClubData.filter((club) => {
    return club.name.toLowerCase().includes(searchQuery.toLowerCase()) && club;
  });
  // Filtering clubs displayed based on category options
  let returnClub = false;
  filteredList = filteredList.filter((club) => {
    returnClub = false;
    // if no filters return all clubs
    if (filterTags.length === 0) {
      return club;
    }
    club.tags.forEach((tag) => {
      if (filterTags.includes(tag)) {
        returnClub = true;
      }
    });
    return returnClub && club;
  });
  // Filtering clubs displayed based on category options
  filteredList = filteredList.filter((club) => {
    returnClub = false;
    // if no category filters return all clubs
    club.categories.forEach((category) => {
      if (categoryTags[0] === "All") {
        returnClub = true;
      }
      if (categoryTags.includes(category)) {
        returnClub = true;
      }
    });
    return returnClub && club;
  });

  return (
    <>
      <div className="grid w-full grid-flow-row gap-8 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {isLoadingData
          ? [...Array(10)].map((e, i) => (
              <NavLink to={`/discover`} className="opacity-70" key={i}>
                <div className="p-2 rounded-lg h-72 bg-BlueGrey dark:bg-BlueBlack duration-ThemeDuration">
                  <div className="h-[17rem]">
                    <div className="object-cover w-full h-24 bg-center rounded-lg bg-slate-400 dark:bg-slate-500" />
                    <div className="relative object-cover w-16 h-16 translate-x-4 -translate-y-8 bg-center rounded-lg drop-shadow-lg bg-slate-500 dark:bg-slate-400" />
                    <div className="h-32 px-4 -translate-y-6">
                      <div className="overflow-hidden h-fit">
                        <div className="w-full h-6 overflow-x-scroll rounded-lg md:h-7 scrollbar-none bg-slate-400 dark:bg-slate-500" />
                      </div>
                      <p className="w-full h-16 mt-2 rounded-lg bg-slate-400 dark:bg-slate-500" />
                    </div>
                  </div>
                </div>
              </NavLink>
            ))
          : filteredList.map((club, i) => {
              return (
                <NavLink key={i} to={`/club/${club.clubStr}`}>
                  <div className="p-2 rounded-lg h-72 bg-BlueGrey dark:bg-BlueBlack hover:scale-[101%] duration-ThemeDuration">
                    <div className="h-[17rem]">
                      <img
                        className="object-cover w-full h-24 bg-center rounded-lg "
                        src={club.banner}
                        alt="banner"
                      />
                      <img
                        className="relative object-cover w-16 h-16 translate-x-4 -translate-y-8 bg-center rounded-lg drop-shadow-lg"
                        src={club.logo}
                        alt="logo"
                      />
                      <div className="h-32 px-4 -translate-y-6 ">
                        <div className="overflow-hidden text-black h-fit dark:text-white">
                          <h1 className="overflow-x-scroll text-base font-semibold whitespace-nowrap md:text-lg scrollbar-none">
                            {club.name}
                          </h1>
                          <div className="flex flex-row space-x-2 overflow-x-scroll scrollbar-none">
                            {club.tags.length !== 0 && (
                              <h1 className="text-sm font-bold">
                                recruiting:{" "}
                              </h1>
                            )}
                            {club.tags.map((tag, i) => {
                              return (
                                <div
                                  key={i}
                                  className="px-2 text-xs font-semibold text-white rounded-lg lg:text-sm bg-Blue w-fit h-fit"
                                >
                                  {tag === "sub" && "subcommittee"}
                                  {tag === "exec" && "executive"}
                                  {tag === "vol" && "volunteer"}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <p
                          className={`w-full pr-1 text-sm md:text-base text-black dark:text-white whitespace-pre-wrap overflow-y-scroll 
                          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey scrollbar-thumb-rounded-2xl
                          ${club.tags.length === 0 ? "h-4/5 " : "h-3/5 mt-1"}
                          `}
                        >
                          {club.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
      </div>
    </>
  );
};

export default ClubTiles;
