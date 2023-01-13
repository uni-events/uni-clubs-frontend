const StatisticsCard = () => {
  return (
    <>
      <div className="w-full p-4 rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG">
        <div className="flex flex-col items-center justify-between px-4 py-2 sm:flex-row">
          <h1 className="text-2xl font-bold">Statistics</h1>
          <h1 className="pr-2 text-base">past week</h1>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 py-2 mt-2">
          <div className="p-2 text-center">
            <h1 className="text-xl font-extrabold">23</h1>
            <h1 className="text-xl truncate ">Page Visits</h1>
          </div>
          <div className="p-2 text-center">
            <h1 className="text-xl font-extrabold">3</h1>
            <h1 className="text-xl truncate ">Reviews</h1>
          </div>
          <div className="p-2 text-center">
            <h1 className="text-xl font-extrabold">40</h1>
            <h1 className="text-xl truncate ">Event Views</h1>
          </div>
          <div className="p-2 text-center">
            <h1 className="text-xl font-extrabold">7.5 / 10</h1>
            <h1 className="text-xl truncate ">Satisfaction</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsCard;
