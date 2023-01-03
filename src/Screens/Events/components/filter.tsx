import { useState } from "react";
import { CategoryData, FilterData, sliderOpts } from "../../../Data/dataTypes";

const EventsFilter = () => {
  const Filters: Array<FilterData> = [
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

  const resetFilters = () => {
    setCatState([...BoolArrInitCategory]);
    setFilterState([...BoolArrInitFilter]);
  };

  const handleFilterClick = (index: number) => {
    filterState[index].op1 = !filterState[index].op1;
    if (filterState[index].op2) {
      filterState[index].op2 = !filterState[index].op2;
    }
    setFilterState([...filterState]);
  };

  const handleCategoryClick = (index: number) => {
    if (index !== 0) {
      catState[index] = !catState[index];
      catState[0] = false;
      setCatState([...catState]);
    }
    if (index === 0) {
      setCatState([...BoolArrInitCategory]);
    }
  };

  return (
    <>
      <div className="h-full w-full p-4 bg-BlueGrey text-black dark:bg-BlueBlack dark:text-white rounded-lg">
        <div className="flex flex-row justify-between">
          <h1 className="h-fit text-2xl font-bold text-black dark:text-WhiteBG text-center">
            Filters
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="h-fit text-center text-sm font-bold text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed "
              onClick={() => setFilterState([...BoolArrInitFilter])}
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {Filters.map((filters, index) => {
            return (
              <>
                <div className="flex flex-row space-x-4 text-white text-base font-bold">
                  <button
                    onClick={() => {
                      handleFilterClick(index);
                    }}
                    className={`w-full rounded-lg p-1 ${
                      filterState[index].op1
                        ? "bg-Green hover:bg-DarkGreen"
                        : "bg-Blue hover:bg-DarkBlue"
                    }`}
                  >
                    <div className="text-center">{filters.name}</div>
                  </button>
                  <button
                    onClick={() => {
                      filterState[index].op2 = !filterState[index].op2;
                      if (filterState[index].op1) {
                        filterState[index].op1 = !filterState[index].op1;
                      }
                      setFilterState([...filterState]);
                    }}
                    className={`w-full rounded-lg p-1 ${
                      filterState[index].op2
                        ? "bg-Green hover:bg-DarkGreen"
                        : "bg-Blue hover:bg-DarkBlue"
                    }`}
                  >
                    <div className="text-center">{filters.opposite}</div>
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-row justify-between mt-4">
          <h1 className="text-2xl font-bold text-black dark:text-WhiteBG text-center ">
            Categories
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="h-fit text-center text-sm font-bold text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed "
              onClick={() => setCatState([...BoolArrInitCategory])}
            >
              Reset Categories
            </button>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {Categories.map((category, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    handleCategoryClick(index);
                  }}
                  className={`w-full h-fit p-1 rounded-lg ${
                    !catState[index] ? "bg-Blue" : "bg-Green"
                  }`}
                >
                  <h1 className="text-white text-base font-extrabold ">
                    {category.name}
                  </h1>
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center mt-4">
          <button
            className="text-center h-fit p-1 font-bold w-full text-base rounded-lg bg-Red hover:bg-DarkRed"
            onClick={() => resetFilters()}
          >
            Reset All
          </button>
        </div>
      </div>
    </>
  );
};

export default EventsFilter;
