import { NavLink } from "react-router-dom";
import { ClubTileData, longStr } from "../../../../Data/dataTypes";
import { useState } from "react";

const ClubTiles = ({ searchQuery }: { searchQuery: string }) => {
  const ClubData: ClubTileData[] = [
    {
      clubStr: "catsoc",
      name: "Cat Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    },

    {
      clubStr: "csesoc",
      name: "CSE Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
    },
    {
      clubStr: "catsoc",
      name: "Cat Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    },
    {
      clubStr: "cserevue",
      name: "Computer Science and Engineering Revue",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      banner: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
    },
    {
      clubStr: "dogsoc",
      name: "Dog Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
    },
    {
      clubStr: "digisoc",
      name: "Digital Society UNSW",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
    },
    {
      clubStr: "catsoc",
      name: "Cat Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    },
    {
      clubStr: "csesoc",
      name: "CSE Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
    },
    {
      clubStr: "dogsoc",
      name: "Dog Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
    },
    {
      clubStr: "digisoc",
      name: "Digital Society UNSW",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
    },
    {
      clubStr: "catsoc",
      name: "Cat Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    },
    {
      clubStr: "cserevue",
      name: "Computer Science and Engineering Revue",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      banner: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
    },
    {
      clubStr: "csesoc",
      name: "CSE Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
    },
    {
      clubStr: "dogsoc",
      name: "Dog Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
    },
    {
      clubStr: "digisoc",
      name: "Digital Society UNSW",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
    },
  ];

  const filteredList: ClubTileData[] = ClubData.filter((club) => {
    return club.name.toLowerCase().includes(searchQuery.toLowerCase()) && club;
  });

  return (
    <>
      <div className="grid grid-flow-row w-full gap-4 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {filteredList.map((club, index) => {
          return (
            <NavLink to={`/club`}>
              <body className="p-2 bg-BlueGrey dark:bg-BlueBlack rounded-lg">
                <div className="relative">
                  <img
                    className="rounded-lg w-full h-24 object-cover mb-6"
                    src={club.banner}
                    alt="banner"
                  />
                  <img
                    className="absolute h-16 w-16 object-cover left-4 bottom-0 rounded-lg top-16 drop-shadow-lg"
                    src={club.logo}
                    alt="logo"
                  />
                  <div className="text-black whitespace-pre-wrap overflow-hidden p-4 mb-2 max-h-36 dark:text-WhiteBG ">
                    <h1 className="font-bold text-lg md:text-xl">
                      {club.name}
                    </h1>
                    <h1 className="text-base font-light">{club.description}</h1>
                  </div>
                </div>
              </body>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default ClubTiles;
