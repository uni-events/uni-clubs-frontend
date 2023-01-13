import pfp from "../../../Assets/pfp.png";
const ExecutiveInfo = () => {
  return (
    <>
      <div className="flex flex-row space-x-4">
        <div className="my-auto">
          <img
            className="object-cover w-12 h-12 bg-center rounded-lg"
            src={pfp}
            alt="pfp"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Name Name Exec</h1>
          <p className="text-base font-extralight">President</p>
        </div>
      </div>
    </>
  );
};

const ExecutiveCard = () => {
  return (
    <>
      <div className="w-full p-4 space-y-2 text-black rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Current Executives
        </h1>
        <div className="flex flex-col space-y-2">
          <ExecutiveInfo />
          <ExecutiveInfo />
          <ExecutiveInfo />
          <ExecutiveInfo />
          <ExecutiveInfo />
          <ExecutiveInfo />
        </div>
      </div>
    </>
  );
};
export default ExecutiveCard;
