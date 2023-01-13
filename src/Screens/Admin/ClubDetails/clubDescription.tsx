import { useState } from "react";

const ClubDescription = () => {
  const [showDescription, setShowDescription] = useState(true);
  return (
    <>
      <div className="w-full h-full overflow-x-hidden text-black rounded-lg dark:bg-BlueBlack dark:text-WhiteBG">
        <div className="flex flex-col content-center max-w-screen-xl">
          <button onClick={() => setShowDescription(!showDescription)}>
            <div
              className={`bg-BlueGrey dark:bg-BlueBlack w-full h-16 text-xl p-4 font-bold text-left rounded-t-lg ${
                showDescription
                  ? "rounded-lg text-left"
                  : "rounded-t-lg text-center"
              }`}
            >
              Club Description
            </div>
          </button>
          <div
            className={`flex flex-col bg-LightBlueGrey text-black  dark:text-WhiteBG dark:bg-LightBlueBlack w-full h-full text-xl p-4 font-bold text-left rounded-b-lg ${
              showDescription ? "hidden" : "block"
            }`}
          >
            <p className="m-4">
              <textarea
                className="w-full max-w-full p-4 text-base font-normal text-black rounded-md resize bg-WhiteBG dark:bg-BlueBlack dark:text-WhiteBG max-h-168 focus:outline-none focus:ring-2 focus:ring-Green scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey scrollbar-thumb-rounded-lg"
                placeholder="Enter Club Description Here"
              ></textarea>
            </p>
            <div className="flex flex-row content-center justify-between mx-4 right">
              <button className="px-4 py-2 text-white rounded-lg bg-Green hover:bg-DarkGreen w-fit h-fit">
                Edit
              </button>
              <div className="space-x-4">
                <button className="px-4 py-2 text-white rounded-lg bg-Red hover:bg-DarkRed w-fit h-fit">
                  Cancel
                </button>
                <button className="px-4 py-2 text-white rounded-lg bg-Blue hover:bg-DarkBlue w-fit h-fit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubDescription;
