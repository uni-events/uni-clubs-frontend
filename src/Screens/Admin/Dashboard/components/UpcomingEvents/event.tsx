import { longStr } from "../../../../../Data/dataTypes";

const Event = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row sm:flex-col sm:grid sm:grid-cols-5 gap-4 my-4">
          <div className="flex flex-col col-span-1 ">
            <h1 className="text-center text-base md:text-lg font-semibold overflow-clip">
              19th Dec
            </h1>
            <h1 className="text-center text-sm md:text-base ">11:00am</h1>
          </div>
          <div className="flex flex-col col-span-3 max-h-24 overflow-clip">
            <h1 className="text-left text-base md:text-lg font-bold truncate">
              Weekly Meetup
            </h1>
            <p className="text-left text-sm md:text-base truncate">{longStr}</p>
          </div>
          <div className="flex flex-col my-auto col-span-1 xs:hidden sm:block">
            <div className="flex flex-row justify-evenly">
              <svg
                className="fill-black dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="M13.325 13q-.725-1-2.037-1.5Q9.975 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13ZM1 15q0-1.5.65-2.625t1.7-1.875q1.05-.75 2.4-1.125Q7.1 9 8.5 9t2.75.375q1.35.375 2.4 1.125 1.05.75 1.7 1.875Q16 13.5 16 15Zm0 4v-2h15v2Zm17 4v-2h1.4l1.4-14h-9.55L11 5h5V1h2v4h5l-1.65 16.55q-.075.6-.538 1.025Q20.35 23 19.7 23Zm0-2h1.4H18ZM2 23q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23Zm6.5-10Z" />
              </svg>
              <svg
                className="fill-black dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="M11.1 19h1.75v-1.25q1.25-.225 2.15-.975.9-.75.9-2.225 0-1.05-.6-1.925T12.9 11.1q-1.5-.5-2.075-.875-.575-.375-.575-1.025 0-.65.463-1.025.462-.375 1.337-.375.8 0 1.25.388.45.387.65.962l1.6-.65q-.275-.875-1.012-1.525-.738-.65-1.638-.725V5h-1.75v1.25q-1.25.275-1.95 1.1-.7.825-.7 1.85 0 1.175.688 1.9.687.725 2.162 1.25 1.575.575 2.188 1.025.612.45.612 1.175 0 .825-.588 1.212-.587.388-1.412.388t-1.462-.513q-.638-.512-.938-1.537l-1.65.65q.35 1.2 1.088 1.938.737.737 1.912 1.012Zm.9 3q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
