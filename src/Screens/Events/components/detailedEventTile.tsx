import { useState } from "react";

const DetailedEventTile = ({
  eventInfo,
  onChange,
}: {
  eventInfo: {
    name: string;
    description: string;
    logo: string;
    banner: string;
    event: string;
    tags: string[];
    categories: string[];
  };
  onChange: Function;
}) => {
  return (
    <div className="absolute z-30 flex w-full h-full bg-[rgba(0,0,0,80%)] place-content-center">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-1/2 max-w-[1440px] rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack duration-ThemeDuration">
          <div className="flex justify-end w-full p-2 h-fit">
            <button
              className="float-right p-2 rounded-lg bg-Red active:bg-DarkRed"
              onClick={() => onChange(false)}
            >
              <svg
                className="fill-white"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
          </div>
          <div className="w-full px-2 pb-2 h-fit ">
            <img
              className="object-cover w-full bg-center rounded-lg h-44"
              src={eventInfo.banner}
              alt="banner"
            />
            <div className="w-full p-2 text-black h-fit dark:text-white">
              <h1 className="text-xl font-bold">{eventInfo.event}</h1>
              <h1 className="text-base font-semibold">{eventInfo.name}</h1>
              <h1 className="pt-2 overflow-x-hidden overflow-y-auto text-sm h-28 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey scrollbar-thumb-rounded-2xl">
                {eventInfo.description}
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full px-2 border border-t-2 rounded-b-lg h-fit border-LightBlueGrey dark:border-LightBlueBlack ">
            <div className="flex flex-col py-2 space-y-2">
              <h1 className="font-semibold text-black dark:text-white">
                Date:&nbsp;
                <p className="inline text-base font-normal">
                  12th December 2023
                </p>
              </h1>
              <h1 className="font-semibold text-black dark:text-white">
                Location:&nbsp;
                <p className="inline text-base font-normal">
                  Webster Building 204
                </p>
              </h1>
              <h1 className="font-semibold text-black dark:text-white">
                Time:&nbsp;
                <p className="inline text-base font-normal">2:00pm - 5:00pm</p>
              </h1>
              <h1 className="font-semibold text-black dark:text-white">
                Cost:&nbsp;
                <p className="inline text-base font-normal">Free</p>
              </h1>
              <h1 className="font-semibold text-black dark:text-white">
                Food:&nbsp;
                <p className="inline text-base font-normal">Pizza</p>
              </h1>
            </div>
            <div className="flex flex-col justify-center p-2">
              <img
                src={eventInfo.logo}
                className="object-cover w-32 h-32 rounded-lg "
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedEventTile;
