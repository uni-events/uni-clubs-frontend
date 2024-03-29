import { useState } from "react";
import {
  CategoryData,
  FilterData,
  TagsData,
  sliderOpts,
} from "../../../Data/dataTypes";

const EventsFilter = ({ onChange }: { onChange: Function }) => {
  const Filters: FilterData[] = [
    {
      name: "Free",
      opposite: "Paid",
    },
    {
      name: "On Campus",
      opposite: "Off Campus",
    },
    {
      name: "Food & Drinks",
      opposite: "No Food",
    },
  ];
  const Categories: CategoryData[] = [
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

  Categories.forEach((f) => {
    BoolArrInitCategory.push(false);
  });
  BoolArrInitCategory[0] = true;
  const [catState, setCatState] = useState([...BoolArrInitCategory]);

  let BoolArrInitFilter: sliderOpts[] = [];
  Filters.forEach((f) => {
    BoolArrInitFilter.push({ op1: false, op2: false });
  });
  const [filterState, setFilterState] = useState([...BoolArrInitFilter]);

  const handleFilterClick = (index: number, option: 1 | 2) => {
    if (option === 1) {
      filterState[index].op1 = !filterState[index].op1;
      if (filterState[index].op2) {
        filterState[index].op2 = !filterState[index].op2;
      }
    }
    if (option === 2) {
      filterState[index].op2 = !filterState[index].op2;
      if (filterState[index].op1) {
        filterState[index].op1 = !filterState[index].op1;
      }
    }
    setFilterState([...filterState]);
    onChange(setTags([...filterState], catState));
  };

  const setTags = (filterTags: sliderOpts[], categoryTags: boolean[]) => {
    let tags: TagsData = {
      filters: [],
      categories: [],
    };
    categoryTags.forEach((catBool, index) => {
      if (catBool) tags.categories.push(Categories[index].name);
    });
    filterTags.forEach((filter, index) => {
      if (filter.op1) tags.filters.push(Filters[index].name);
      if (filter.op2) tags.filters.push(Filters[index].opposite);
    });
    return tags;
  };

  const handleCategoryClick = (index: number) => {
    if (index !== 0) {
      catState[index] = !catState[index];
      catState[0] = false;
      setCatState([...catState]);
      onChange(setTags(filterState, [...catState]));
    }
    if (index === 0 || !catState.includes(true)) {
      setCatState([...BoolArrInitCategory]);
      onChange(setTags(filterState, [...BoolArrInitCategory]));
    }
  };
  const handleReset = (type: string) => {
    if (type === "filter") {
      setFilterState([...BoolArrInitFilter]);
      onChange(setTags([...BoolArrInitFilter], catState));
    }
    if (type === "category") {
      setCatState([...BoolArrInitCategory]);
      onChange(setTags(filterState, [...BoolArrInitCategory]));
    }
  };

  return (
    <>
      <div className="w-full h-full p-4 text-black rounded-lg bg-BlueGrey dark:bg-BlueBlack dark:text-white duration-ThemeDuration">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            {/* filter icon */}
            <svg
              className="my-auto dark:fill-white fill-black"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
            <h1 className="text-2xl font-bold text-center text-black h-fit dark:text-WhiteBG">
              Filters
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <button
              className="text-base font-bold text-center duration-150 h-fit text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed"
              onClick={() => handleReset("filter")}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {Filters.map((filters, index) => {
            return (
              <div
                key={index}
                className="flex flex-row space-x-2 text-base font-bold text-white"
              >
                <button
                  onClick={() => {
                    handleFilterClick(index, 1);
                  }}
                  className={`w-full rounded-lg p-1 duration-150 ${
                    filterState[index].op1
                      ? "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
                      : "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                  }`}
                >
                  <div className="text-center">{filters.name}</div>
                </button>
                <button
                  onClick={() => {
                    handleFilterClick(index, 2);
                  }}
                  className={`w-full rounded-lg p-1 duration-150 ${
                    filterState[index].op2
                      ? "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
                      : "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                  }`}
                >
                  <div className="text-center">{filters.opposite}</div>
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row space-x-2">
            {/* tag icon */}
            <svg
              className="my-auto dark:fill-white fill-black"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
            <h1 className="text-2xl font-bold text-center text-black dark:text-WhiteBG ">
              Categories
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <button
              className="text-base font-bold text-center duration-150 h-fit text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed"
              onClick={() => handleReset("category")}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {Categories.map((category, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    handleCategoryClick(index);
                  }}
                  className={`w-full h-fit p-1 rounded-lg duration-150 ${
                    !catState[index]
                      ? "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                      : "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
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

export default EventsFilter;
