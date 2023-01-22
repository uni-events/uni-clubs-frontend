import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const CommonFooter = () => {
  const [tooltipContent, setTooltipContent] = useState(
    "Click to Copy Discord Tag!"
  );
  const handleClick = () => {
    navigator.clipboard.writeText("Hehe#6969");
    setTooltipContent("Copied Discord Tag!");
    setTimeout(() => {
      setTooltipContent("Click to Copy Discord Tag!");
    }, 2000);
  };
  return (
    <div className="w-full p-6 mt-12 text-center h-fit bg-LightBlueGrey dark:bg-LightBlueBlack">
      <p className="text-lg font-normal text-black dark:text-white">
        Made with ❤️ by&nbsp;
        <button
          id="hari-tag"
          onClick={handleClick}
          className="inline-block text-xl font-semibold text-transparent hover:animate-text bg-gradient-to-r from-Green hover:via-Blue to-Blue hover:to-Green bg-clip-text"
        >
          @Hari Pramod
        </button>
        <Tooltip anchorId="hari-tag" content={tooltipContent} place="top" />
      </p>
    </div>
  );
};
export default CommonFooter;
