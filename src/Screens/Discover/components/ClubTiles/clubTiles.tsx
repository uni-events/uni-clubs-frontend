import { NavLink } from "react-router-dom";
import { ClubTileData, longStr } from "../../../../Data/dataTypes";

const ClubTiles = ({
  searchQuery,
  filterTags,
  categoryTags,
}: {
  searchQuery: string;
  filterTags: string[];
  categoryTags: string[];
}) => {
  const ClubData: ClubTileData[] = [
    {
      clubStr: "catsoc",
      name: "Cat Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      tags: ["exec"],
      categories: ["Hobby"],
    },

    {
      clubStr: "csesoc",
      name: "CSE Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      tags: ["sub", "vol"],
      categories: ["Academic/Career"],
    },
    {
      clubStr: "cserevue",
      name: "Computer Science and Engineering Revue",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      banner: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      tags: ["sub"],
      categories: ["Hobby"],
    },
    {
      clubStr: "dogsoc",
      name: "Dog Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      tags: ["exec"],
      categories: ["Hobby"],
    },
    {
      clubStr: "digisoc",
      name: "Digital Society UNSW",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      tags: ["exec"],
      categories: ["Academic/Career"],
    },
  ];

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
      <div className="grid grid-flow-row w-full gap-4 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredList.map((club) => {
          return (
            <NavLink to={`/club`}>
              <body className="p-2 bg-BlueGrey dark:bg-BlueBlack rounded-lg ease-in-out hover:scale-105 hover:duration-300">
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
                  <div className="text-black whitespace-pre-wrap overflow-hidden p-4 mb-2 max-h-36 dark:text-WhiteBG">
                    <h1 className="font-bold text-lg md:text-xl">
                      {club.name}
                    </h1>
                    <h1 className="text-base font-light">{club.tags}</h1>
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
