const FeesCard = () => {
  return (
    <>
      <div className="w-full h-fit p-4 space-y-2 rounded-lg bg-BlueGrey dark:bg-BlueBlack text-black dark:text-WhiteBG duration-ThemeDuration">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Membership
        </h1>
        <div className="flex flex-col space-y-2 px-2 pb-2">
          <h1>Arc Member: $5</h1>
          <h1>Non-Arc Member: $10</h1>
          <h1>Associate Member: $10</h1>
        </div>
        <button className="h-fit w-full py-2 px-4 rounded-lg bg-Green hover:bg-DarkGreen text-white font-bold text-center">
          Join on Arc
        </button>
      </div>
    </>
  );
};
export default FeesCard;
