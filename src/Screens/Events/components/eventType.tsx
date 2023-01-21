import { useState } from "react";

const EventsType = ({ onChange }: { onChange: Function }) => {
  const [purpose, setPurpose] = useState("EventsOfDay");
  const changePurpose = (event: string) => {
    setPurpose(event);
    onChange(event);
  };
  return (
    <div className="w-full p-4 rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack">
      <div className="flex flex-col text-black dark:text-white">
        <button
          className="p-2 hover:rounded-lg hover:bg-LightBlueGrey dark:hover:bg-LightBlueBlack"
          onClick={() => changePurpose("TrendingEvents")}
        >
          <span className="flex flex-row space-x-4">
            <svg
              className="fill-black dark:fill-white"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-2.8-5.6-5.6-11.2-9.8-16.8l-50.6 58.8s-81.4-103.6-87.1-110.6C133.1 243.8 112 273.2 112 306.8C112 375.4 162.6 416 225.7 416z" />
            </svg>
            <h1 className="text-base font-semibold whitespace-nowrap">
              Trending Events
            </h1>
          </span>
        </button>
        <button
          className="p-2 hover:rounded-lg hover:bg-LightBlueGrey dark:hover:bg-LightBlueBlack"
          onClick={() => changePurpose("EventsOfDay")}
        >
          <span className="flex flex-row space-x-4">
            <svg
              className="fill-black dark:fill-white"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
            </svg>
            <h1 className="text-base font-semibold whitespace-nowrap">
              Events of the Day
            </h1>
          </span>
        </button>
      </div>
    </div>
  );
};
export default EventsType;
