import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const CommonFooter = () => {
  return (
    <div className="w-full p-6 text-center h-fit bg-LightBlueGrey dark:bg-LightBlueBlack">
      <p className="text-lg font-normal text-black dark:text-white">
        Made with ❤️ by&nbsp;
        <button
          id="hari-tag"
          className="inline-block text-xl font-semibold text-transparent hover:animate-text bg-gradient-to-r from-Green hover:via-Blue to-Blue hover:to-Green bg-clip-text"
        >
          @Hari Pramod
        </button>
        <Tooltip anchorId="hari-tag" content="Discord: Hehe#6969" place="top" />
      </p>
    </div>
  );
};
export default CommonFooter;
