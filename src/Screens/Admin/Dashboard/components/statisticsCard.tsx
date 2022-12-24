const StatisticsCard = () => {
  return (
    <>
      <div className="w-full h-fit bg-BlueGrey p-4 rounded-lg dark:bg-BlueBlack dark:text-WhiteBG">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-2">
          <h1 className="text-2xl font-bold">Statistics</h1>
          <h1 className="text-base pr-2">past week</h1>
        </div>

        <div className="grid gap-4 mt-2 py-2 grid-cols-2 grid-rows-2">
          <div className="text-center p-2">
            <h1 className="font-extrabold text-xl">23</h1>
            <h1 className=" text-xl truncate">Page Visits</h1>
          </div>
          <div className="text-center p-2">
            <h1 className="font-extrabold text-xl">3</h1>
            <h1 className=" text-xl truncate">Reviews</h1>
          </div>
          <div className="text-center p-2">
            <h1 className="font-extrabold text-xl">40</h1>
            <h1 className=" text-xl truncate">Event Views</h1>
          </div>
          <div className="text-center p-2">
            <h1 className="font-extrabold text-xl">7.5 / 10</h1>
            <h1 className=" text-xl truncate">Satisfaction</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsCard;
