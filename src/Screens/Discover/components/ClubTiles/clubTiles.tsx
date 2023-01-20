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
      tags: ["sub", "vol", "exec"],
      categories: ["Academic/Career"],
    },
    {
      clubStr: "cserevue",
      name: "Computer Science and Engineering Revue",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      banner: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      tags: ["sub", "exec", "vol"],
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
      <div className="grid w-full grid-flow-row gap-4 xs:grid-cols-1 lg:grid-cols-2">
        {filteredList.map((club, i) => {
          return (
            <>
              <NavLink key={i} to={`/club/${club.clubStr}`}>
                <div className="p-2 rounded-lg h-72 bg-BlueGrey dark:bg-BlueBlack hover:scale-105 duration-ThemeDuration">
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
                        <h1 className="right-0 overflow-x-scroll text-base font-semibold whitespace-nowrap md:text-base scrollbar-none">
                          {club.name}
                        </h1>
                        <div className="flex flex-row pt-1 space-x-2 overflow-x-scroll scrollbar-none">
                          {club.tags.map((tag, i) => {
                            return (
                              <div
                                key={i}
                                className="px-2 text-xs font-semibold text-white rounded-lg bg-Blue w-fit h-fit"
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
                        className={`w-full pr-1 mt-2 overflow-y-scroll text-xs text-black whitespace-pre-wrap scrollbar-none dark:text-white md:text-sm ${
                          club.tags.length === 0 ? "h-4/5" : "h-3/5"
                        }`}
                      >
                        {club.description}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ClubTiles;
