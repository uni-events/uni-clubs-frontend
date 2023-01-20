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
      tags: [],
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
      <div className="grid w-full grid-flow-row gap-4 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredList.map((club, i) => {
          return (
            <NavLink key={i} to={`/club/${club.clubStr}`}>
              <body className="p-2 ease-in-out rounded-lg bg-BlueGrey dark:bg-BlueBlack hover:scale-105 duration-ThemeDuration">
                <div className="relative">
                  <img
                    className="object-cover w-full h-24 mb-6 rounded-lg"
                    src={club.banner}
                    alt="banner"
                  />
                  <img
                    className="absolute bottom-0 object-cover w-16 h-16 rounded-lg left-4 top-16 drop-shadow-lg"
                    src={club.logo}
                    alt="logo"
                  />
                  <div className="p-4 mb-2 text-black whitespace-pre-wrap overflow-clip h-36 dark:text-WhiteBG">
                    <h1 className="text-base font-bold md:text-xl">
                      {club.name}
                    </h1>
                    <div className="flex flex-row space-x-2">
                      {club.tags.map((tag, i) => {
                        return (
                          <div
                            key={i}
                            className="px-2 text-xs font-semibold text-white rounded-lg bg-Blue w-fit h-hit"
                          >
                            {tag === "sub" && "subcommittee"}
                            {tag === "exec" && "executive"}
                            {tag === "vol" && "volunteer"}
                          </div>
                        );
                      })}
                    </div>
                    <h1 className="text-sm font-light overflow-clip">
                      {club.description}
                    </h1>
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
