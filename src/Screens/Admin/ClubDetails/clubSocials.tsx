import { useState } from "react";
import Social from "./Components/social";

const ClubSocials = () => {
  const [showSocials, setShowSocials] = useState(true);
  return (
    <>
      <div className="w-full h-full dark:bg-BlueBlack rounded-lg text-black dark:text-WhiteBG overflow-x-hidden">
        <div className="flex flex-col max-w-screen-xl content-center">
          <button onClick={() => setShowSocials(!showSocials)}>
            <div
              className={`bg-BlueGrey dark:bg-BlueBlack w-full h-16 text-xl p-4 font-bold text-left rounded-t-lg ${
                showSocials
                  ? "rounded-lg text-left"
                  : "rounded-t-lg text-center"
              }`}
            >
              Club Socials
            </div>
          </button>
          <div
            className={`flex flex-col bg-LightBlueGrey text-black  dark:text-WhiteBG dark:bg-LightBlueBlack w-full h-full text-xl p-4 font-bold text-left rounded-b-lg ${
              showSocials ? "hidden" : "block"
            }`}
          >
            <h1 className="text-xl font-bold mx-4">Edit Club Socials</h1>
            <div className="flex flex-col justify-between mx-4 my-4">
              <Social />
              <Social />
              <Social />
            </div>

            <div className="flex flex-row mx-4 content-center justify-between right">
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

export default ClubSocials;
