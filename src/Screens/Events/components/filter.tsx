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

  let BoolArrInit: boolean[] = [];

  Categories.forEach((f) => {
    BoolArrInit.push(false);
  });
  BoolArrInit[0] = true;
  const [catState, setCatState] = useState([...BoolArrInit]);

  let BoolArrInitFilter: sliderOpts[] = [];
  Filters.forEach((f) => {
    BoolArrInitFilter.push({ op1: false, op2: false });
  });
  const [filterState, setFilterState] = useState([...BoolArrInitFilter]);
  const resetFilters = () => {
    setCatState([...BoolArrInit]);
    setFilterState([...BoolArrInitFilter]);
  };

  return (
    <>
      <div className="h-full w-full p-4 bg-BlueGrey text-black dark:bg-BlueBlack dark:text-white rounded-lg">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG text-center ">
          Filters
        </h1>
        <button className="text-center" onClick={() => resetFilters()}>
          Reset All Filters
        </button>
        <div className="space-y-4 mt-4">
          {Filters.map((filters, index) => {
            return (
              <>
                <div className="flex flex-row space-x-4 text-white text-md font-bold">
                  <button
                    onClick={() => {
                      filterState[index].op1 = !filterState[index].op1;
                      if (filterState[index].op2) {
                        filterState[index].op2 = !filterState[index].op2;
                      }
                      setFilterState([...filterState]);
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
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG text-center mt-4">
          Categories
        </h1>
        <div className="space-y-4 mt-4">
          {Categories.map((category, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    if (index !== 0) {
                      catState[index] = !catState[index];
                    }
                    setCatState([...catState]);
                  }}
                  className={`w-full h-fit p-1 rounded-lg ${
                    !catState[index] ? "bg-Blue" : "bg-Green"
                  }`}
                >
                  <h1 className="text-white text-md font-extrabold ">
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
