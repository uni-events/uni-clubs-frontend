const FeesCard = () => {
  return (
    <>
      <div className="w-full p-4 space-y-2 text-black rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Membership
        </h1>
        <div className="flex flex-col px-2 pb-2 space-y-2">
          <h1>Arc Member: $5</h1>
          <h1>Non-Arc Member: $10</h1>
          <h1>Associate Member: $10</h1>
        </div>
        <button className="w-full px-4 py-2 font-bold text-center text-white rounded-lg h-fit bg-Green hover:bg-DarkGreen">
          Join on Arc
        </button>
      </div>
    </>
  );
};
export default FeesCard;
