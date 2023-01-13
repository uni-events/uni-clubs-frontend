import MerchCard from "./merchCard";

const MerchandiseWidget = () => {
  return (
    <>
      <div className="my-8">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG ">
          Merchandise
        </h1>
        <div className="flex flex-row w-full h-full pb-32 mt-4 space-x-8 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg">
          <MerchCard />
          <MerchCard />
          <MerchCard />
          <MerchCard />
          <MerchCard />
        </div>
      </div>
    </>
  );
};
export default MerchandiseWidget;
