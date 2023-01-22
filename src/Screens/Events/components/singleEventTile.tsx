const SingleEventTile = ({
  eventDetails,
}: {
  eventDetails: {
    name: string;
    description: string;
    logo: string;
    banner: string;
    event: string;
    tags: string[];
    categories: string[];
  };
}) => {
  return (
    <div className="w-full rounded-lg h-fit hover:scale-[101%] bg-BlueGrey dark:bg-BlueBlack duration-ThemeDuration">
      <div className="w-full p-2 rounded-t-lg h-72 ">
        <img
          className="object-cover w-full h-24 bg-center rounded-lg"
          src={eventDetails.banner}
          alt="banner"
        />
        <div className="w-full p-2 text-black h-fit dark:text-white">
          <h1 className="text-xl font-bold">{eventDetails.event}</h1>
          <h1 className="text-base font-semibold">{eventDetails.name}</h1>
          <h1 className="pt-2 overflow-x-hidden overflow-y-auto text-sm h-28 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey scrollbar-thumb-rounded-2xl">
            {eventDetails.description}
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full h-12 px-2 border border-t-2 rounded-b-lg border-LightBlueGrey dark:border-LightBlueBlack ">
        <h1 className="p-2 font-semibold text-black dark:text-white">
          Date:
          <p className="inline text-base font-normal"> 12th December 2:00pm</p>
        </h1>
        <span className="flex flex-row float-right p-2 space-x-2 h-fit">
          {eventDetails.tags.includes("food") && (
            <svg
              className=" fill-black dark:fill-WhiteBG"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M13.325 13q-.725-1-2.037-1.5Q9.975 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13ZM1 15q0-1.5.65-2.625t1.7-1.875q1.05-.75 2.4-1.125Q7.1 9 8.5 9t2.75.375q1.35.375 2.4 1.125 1.05.75 1.7 1.875Q16 13.5 16 15Zm0 4v-2h15v2Zm17 4v-2h1.4l1.4-14h-9.55L11 5h5V1h2v4h5l-1.65 16.55q-.075.6-.538 1.025Q20.35 23 19.7 23Zm0-2h1.4H18ZM2 23q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23Zm6.5-10Z" />
            </svg>
          )}
          {eventDetails.tags.includes("no-food") && (
            <svg
              className="fill-black dark:fill-WhiteBG"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M21.625 18.75 19.8 16.925 20.8 7h-9.55L11 5h5V1h2v4h5Zm-6-5.975Zm4.85 10.525L.675 3.5 2.1 2.075l19.8 19.8ZM1 19v-2h15v2Zm1 4q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23ZM9.05 9.025v2q-.125 0-.275-.013Q8.625 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13h9.35l2 2H1q0-3.025 2.338-4.512Q5.675 9 8.5 9q.125 0 .275.012.15.013.275.013ZM8.5 13Z" />
            </svg>
          )}
          {eventDetails.tags.includes("paid") && (
            <svg
              className="fill-black dark:fill-WhiteBG"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M11.1 19h1.75v-1.25q1.25-.225 2.15-.975.9-.75.9-2.225 0-1.05-.6-1.925T12.9 11.1q-1.5-.5-2.075-.875-.575-.375-.575-1.025 0-.65.463-1.025.462-.375 1.337-.375.8 0 1.25.388.45.387.65.962l1.6-.65q-.275-.875-1.012-1.525-.738-.65-1.638-.725V5h-1.75v1.25q-1.25.275-1.95 1.1-.7.825-.7 1.85 0 1.175.688 1.9.687.725 2.162 1.25 1.575.575 2.188 1.025.612.45.612 1.175 0 .825-.588 1.212-.587.388-1.412.388t-1.462-.513q-.638-.512-.938-1.537l-1.65.65q.35 1.2 1.088 1.938.737.737 1.912 1.012Zm.9 3q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
            </svg>
          )}
          {eventDetails.tags.includes("free") && (
            <svg
              className="fill-black dark:fill-WhiteBG"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M14.35 8.55q-.3-.75-.887-1.175-.588-.425-1.413-.425-.45 0-.875.125t-.775.475L8.95 6.1q.35-.35.95-.637.6-.288 1.1-.363V3h2v2.05q1.125.225 1.975.912.85.688 1.275 1.788ZM19.8 22.6 15.2 18q-.375.375-1.025.613-.65.237-1.175.287V21h-2v-2.15q-1.4-.35-2.337-1.275-.938-.925-1.363-2.325l2-.8q.3 1.05 1.012 1.8.713.75 1.888.75.45 0 .825-.113.375-.112.725-.337L1.4 4.2l1.4-1.4 18.4 18.4Z" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};
export default SingleEventTile;
