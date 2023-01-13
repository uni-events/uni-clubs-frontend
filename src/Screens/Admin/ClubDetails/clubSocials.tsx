import { useState } from "react";
import Social from "./Components/social";

const ClubSocials = () => {
  const [showSocials, setShowSocials] = useState(true);
  return (
    <>
      <div className="w-full h-full overflow-x-hidden text-black rounded-lg dark:bg-BlueBlack dark:text-WhiteBG">
        <div className="flex flex-col content-center max-w-screen-xl">
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
            <h1 className="mx-4 text-xl font-bold">Edit Club Socials</h1>
            <div className="flex flex-col justify-between mx-4 my-4">
              <Social />
              <Social />
              <Social />
            </div>

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

export default ClubSocials;
