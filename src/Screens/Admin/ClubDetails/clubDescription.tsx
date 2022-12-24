import { useState } from "react";

const ClubDescription = () => {
  const [showDescription, setShowDescription] = useState(true);
  return (
    <>
      <div className="w-full h-full dark:bg-BlueBlack rounded-lg text-black dark:text-WhiteBG overflow-x-hidden">
        <div className="flex flex-col max-w-screen-xl content-center">
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
                className="resize p-4 text-base w-full bg-WhiteBG dark:bg-BlueBlack dark:text-WhiteBG text-black font-normal rounded-md max-w-full max-h-168 focus:outline-none focus:ring-2 focus:ring-Green scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey scrollbar-thumb-rounded-lg"
                placeholder="Enter Club Description Here"
              ></textarea>
            </p>
            <div className="flex flex-row  mx-4 content-center justify-between right">
              <button className="text-white bg-Green hover:bg-DarkGreen px-4 py-2 w-fit h-fit rounded-lg">
                Edit
              </button>
              <div className="space-x-4">
                <button className="text-white bg-Red hover:bg-DarkRed px-4 py-2 w-fit h-fit rounded-lg">
                  Cancel
                </button>
                <button className="text-white bg-Blue hover:bg-DarkBlue px-4 py-2 w-fit h-fit rounded-lg">
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
