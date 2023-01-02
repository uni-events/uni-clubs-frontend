import { useState } from "react";
import { CategoryData, FilterData } from "../../../Data/dataTypes";
import Slider from "../../../Components/slider";

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
      name: "Free Food",
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

  Filters.forEach((f) => {
    BoolArrInit.push(false);
  });

  Categories.forEach((f) => {
    BoolArrInit.push(false);
  });
  BoolArrInit[0] = true;

  const [catState, setCatState] = useState([...BoolArrInit]);
  const [filterState, setFilterState] = useState([...BoolArrInit]);

  return (
    <>
      <div className="h-full w-full p-4 bg-BlueGrey text-black dark:bg-BlueBlack dark:text-white rounded-lg">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG text-center">
          Categories
        </h1>
        <div className="space-y-4 mt-4">
          {Categories.map((category, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    catState[index] = !catState[index];
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
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG text-center mt-4">
          Filters
        </h1>
        <div className="space-y-4 mt-4">
          {Filters.map((filters, index) => {
            return (
              <>
                <Slider option1={filters.name} option2={filters.opposite} />
              </>
              // <div className="flex flex-row space-x-2" key={index}>
              //   <button
              //     onClick={() => {
              //       filterState[index] = !filterState[index];
              //       setFilterState([...filterState]);
              //     }}
              //     className={`w-full h-fit p-1 text-white text-md font-extrabold rounded-lg ${
              //       !filterState[index] ? "bg-Blue" : "bg-Green"
              //     }`}
              //   >
              //     <h1>{filters.name}</h1>
              //   </button>
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventsFilter;
