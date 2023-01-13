import { useState } from "react";
import { CategoryData, TagsData } from "../../../Data/dataTypes";

const DiscoverFilter = ({ onChange }: { onChange: Function }) => {
  const Filters: { name: string; handleStr: string }[] = [
    {
      name: "Event Today",
      handleStr: "event",
    },
    {
      name: "Recruiting Executives",
      handleStr: "exec",
    },
    {
      name: "Recruiting Subcommittee",
      handleStr: "sub",
    },
    {
      name: "Recruiting Volunteers",
      handleStr: "vol",
    },
  ];
  const Categories: Array<CategoryData> = [
    {
      name: "All",
    },
    {
      name: "Academic/Career",
    },
    {
      name: "Campus Communities",
    },
    {
      name: "Constituents",
    },
    {
      name: "Councils & Collectives",
    },
    {
      name: "Hobby",
    },
    {
      name: "Gaming",
    },
    {
      name: "Indigenous",
    },
    {
      name: "International/Cultural",
    },
    {
      name: "Political",
    },
    {
      name: "Religious/Spiritual",
    },
    {
      name: "Sports and Fitness",
    },
    {
      name: "Volunteering",
    },
  ];

  let BoolArrInitCategory: boolean[] = [];

  Categories.forEach((f, index) => {
    if (index === 0) {
      BoolArrInitCategory.push(true);
    } else {
      BoolArrInitCategory.push(false);
    }
  });
  console.log(BoolArrInitCategory);
  const [catState, setCatState] = useState([...BoolArrInitCategory]);

  let BoolArrInitFilter: boolean[] = [];
  Filters.forEach((f) => {
    BoolArrInitFilter.push(false);
  });

  const [filterState, setFilterState] = useState([...BoolArrInitFilter]);

  const setTags = (catStateTag: boolean[], filterStateTag: boolean[]) => {
    let tags: TagsData = {
      filters: [],
      categories: [],
    };
    catStateTag.forEach((catBool, index) => {
      if (catBool) tags.categories.push(Categories[index].name);
    });
    filterStateTag.forEach((filterBool, index) => {
      if (filterBool) tags.filters.push(Filters[index].handleStr);
    });
    return tags;
  };
  const handleFilterClick = (index: number) => {
    filterState[index] = !filterState[index];
    setFilterState([...filterState]);
    onChange(setTags(catState, filterState));
  };

  const handleCategoryClick = (index: number) => {
    if (index !== 0) {
      catState[index] = !catState[index];
      catState[0] = false;
      setCatState([...catState]);
      onChange(setTags(catState, filterState));
    }
    if (index === 0 || !catState.includes(true)) {
      setCatState([...BoolArrInitCategory]);
      onChange(setTags(BoolArrInitCategory, filterState));
    }
  };

  const handlFilReset = () => {
    setFilterState([...BoolArrInitFilter]);
    onChange(setTags(catState, BoolArrInitFilter));
  };
  const handleCatReset = () => {
    setCatState([...BoolArrInitCategory]);
    onChange(setTags(BoolArrInitCategory, filterState));
  };

  return (
    <>
      <div className="w-full p-4 text-black rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-white duration-ThemeDuration">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold text-center text-black h-fit dark:text-WhiteBG">
            Filters
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="text-base font-bold text-center duration-150 h-fit text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed"
              onClick={handlFilReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {Filters.map((filters, index) => {
            return (
              <>
                <div className="flex flex-row space-x-4 text-lg font-bold text-white">
                  <button
                    onClick={() => {
                      handleFilterClick(index);
                    }}
                    className={`w-full rounded-lg p-1 duration-150 ${
                      filterState[index]
                        ? "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
                        : "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                    }`}
                  >
                    <div className="text-center">{filters.name}</div>
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-row justify-between mt-4">
          <h1 className="text-2xl font-bold text-center text-black dark:text-WhiteBG ">
            Categories
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="text-base font-bold text-center duration-150 h-fit text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed"
              onClick={handleCatReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {Categories.map((category, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    handleCategoryClick(index);
                  }}
                  className={`w-full h-fit p-1 duration-150 rounded-lg ${
                    catState[index]
                      ? "bg-Green hover:bg-DarkGreen active:bg-DarkBlue "
                      : "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen "
                  }`}
                >
                  <h1 className="text-base font-extrabold text-white ">
                    {category.name}
                  </h1>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DiscoverFilter;
