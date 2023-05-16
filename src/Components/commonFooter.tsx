import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const CommonFooter = () => {
  const [tooltipContent, setTooltipContent] = useState(
    "Click to Copy Discord Tag!"
  );
  const handleClick = () => {
    navigator.clipboard.writeText("Hehe#7505");
    setTooltipContent("Copied Discord Tag!");
    setTimeout(() => {
      setTooltipContent("Click to Copy Discord Tag!");
    }, 2000);
  };
  return (
    <div className="w-full p-6 text-center h-fit duration-ThemeDuration bg-LightBlueGrey dark:bg-LightBlueBlack">
      <p className="text-lg font-normal text-black dark:text-white">
        Made with ❤️ by&nbsp;
        <button
          id="hari-tag"
          onClick={handleClick}
          className="inline-block px-2 text-xl font-semibold text-black duration-150 rounded-lg hover:animate-text hover:scale-[101%] bg-gradient-to-r from-LightGreen hover:from-Green hover:via-Blue to-LightBlue hover:to-Green"
        >
          @Hari Pramod
        </button>
        <Tooltip anchorId="hari-tag" content={tooltipContent} place="top" />
      </p>
    </div>
  );
};
export default CommonFooter;
