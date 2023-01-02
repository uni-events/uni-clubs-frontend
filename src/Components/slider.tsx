import { useState } from "react";

const Slider = ({ option1, option2 }: sliderOpt) => {
  const [op1, setOp1] = useState(2);

  return (
    <>
      <div className="block px-0 rounded-lg">
        <div className="flex flex-row justify-around space-x-2 text-white font-bold rounded-sm">
          <button
            onClick={() => setOp1(1)}
            className={`w-full rounded-lg p-1 ${
              op1 === 1
                ? "bg-Green hover:bg-DarkGreen"
                : "bg-Blue hover:bg-DarkBlue"
            }`}
          >
            <div className="text-center">{option1}</div>
          </button>
          <button
            onClick={() => setOp1(2)}
            className={`w-full rounded-lg p-1 ${
              op1 === 2
                ? "bg-Green hover:bg-DarkGreen"
                : "bg-Blue hover:bg-DarkBlue"
            }`}
          >
            <div className="text-center">None</div>
          </button>
          <button
            onClick={() => setOp1(3)}
            className={`w-full rounded-lg p-1 ${
              op1 === 3
                ? "bg-Green hover:bg-DarkGreen"
                : "bg-Blue hover:bg-DarkBlue"
            }`}
          >
            <div className="text-center">{option2}</div>
          </button>
        </div>
      </div>
    </>
  );
};
export default Slider;
