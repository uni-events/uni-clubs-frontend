import { useState } from "react";
import { CategoryData } from "../../../Data/dataTypes";

const DiscoverFilter = () => {
  const Filters: { name: string }[] = [
    {
      name: "Recruiting Executives",
    },
    {
      name: "Recruiting Subcommittee",
    },
    {
      name: "Recruiting Volunteers",
    },
    {
      name: "Event Today",
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

  let BoolArrInitFilter: boolean[] = [];
  Filters.forEach((f) => {
    BoolArrInitFilter.push(false);
  });
  const [filterState, setFilterState] = useState([...BoolArrInitFilter]);

  const handleFilterClick = (index: number) => {
    filterState[index] = !filterState[index];
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
      <div className="h-fit w-full p-4 bg-BlueGrey text-black dark:bg-BlueBlack dark:text-white rounded-lg">
        <div className="flex flex-row justify-between">
          <h1 className="h-fit text-2xl font-bold text-black dark:text-WhiteBG text-center">
            Filters
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="h-fit text-center text-sm font-bold text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed "
              onClick={() => setFilterState([...BoolArrInitFilter])}
            >
              Reset
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
                      filterState[index]
                        ? "bg-Green hover:bg-DarkGreen"
                        : "bg-Blue hover:bg-DarkBlue"
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
          <h1 className="text-2xl font-bold text-black dark:text-WhiteBG text-center ">
            Categories
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="h-fit text-center text-sm font-bold text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed "
              onClick={() => setCatState([...BoolArrInitCategory])}
            >
              Reset
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
      </div>
    </>
  );
};

export default DiscoverFilter;
