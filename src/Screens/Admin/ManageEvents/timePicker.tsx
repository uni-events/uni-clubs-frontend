import { useState } from "react";
import { TimeData } from "../../../Data/dataTypes";
import { format, parse } from "date-fns";
import { dateAndTimeToDate, dateToDay } from "./timeFormat";

const TimePicker = ({ date, onChange }: { date: Date; onChange: Function }) => {
  const timeFormatArr = format(new Date(date), "hh mm aaaaa'm'").split(" ");

  let timeInit: TimeData = {
    hours: Number(timeFormatArr[0]),
    minutes: Number(timeFormatArr[1]),
    indicator: String(timeFormatArr[2]).toUpperCase(),
  };

  const [selectTime, setSelectTime] = useState({ ...timeInit });
  const [fullDate, setFullDate] = useState(date);

  // const setTimeValue = (date: Date) => () => {
  //   setFullDate(
  //     new Date(
  //       date.getFullYear(),
  //       date.getMonth(),
  //       date.getDay(),
  //       date.getHours(),
  //       date.getMinutes()
  //     )
  //   );
  //   setSelectTime({
  //     ...{
  //       hours: selectTime.hours,
  //       minutes: selectTime.minutes,
  //       indicator: selectTime.indicator,
  //     },
  //   });
  //   const chosenDate: Date = new Date();
  //   console.log(date);
  //   onChange(chosenDate);
  // };

  const handleIndicatorOpt = (event: any) => {
    selectTime.indicator = event.target.value;
    setSelectTime({ ...selectTime });
  };

  const handleHourOpt = (event: any) => {
    let hours: number = Number(event.target.value);
    if (selectTime.indicator === "PM") {
      hours += 12;
    }
    fullDate.setHours(hours);
    console.log(hours);
  };
  const handleMinsOpt = (event: any) => {
    fullDate.setMinutes(event.target.value);
  };

  const hoursOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minuteOptions: number[] = [0, 15, 30, 45];
  const indicatorOptions: string[] = ["AM", "PM"];
  return (
    <>
      <div className="flex items-center justify-center rounded-lg h-fit w-fit bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration">
        <div className="flex flex-row p-4">
          <select
            name="hours"
            className="px-1 text-base bg-transparent outline-none appearance-none cursor-pointer hover:bg-Blue dark:hover:bg-Green "
            onChange={handleHourOpt}
          >
            {hoursOptions.map((hourOpt) =>
              selectTime.hours === hourOpt ? (
                <option
                  value={hourOpt}
                  selected
                  className="text-base text-black dark:text-white"
                >
                  {hourOpt}
                </option>
              ) : (
                <option className="text-base text-black dark:text-white">
                  {hourOpt}
                </option>
              )
            )}
          </select>
          <span className="px-1 text-base">:</span>
          <select
            name="minutes"
            className="px-1 text-base bg-transparent outline-none appearance-none cursor-pointer hover:bg-Blue dark:hover:bg-Green"
          >
            {minuteOptions.map((minuteOpt, index) =>
              selectTime.minutes === minuteOpt ? (
                <option
                  selected
                  className="text-base text-black dark:text-white"
                >
                  {minuteOpt}
                </option>
              ) : (
                <option className="text-base text-black dark:text-white">
                  {minuteOpt}
                </option>
              )
            )}
          </select>
          <select
            name="ampm"
            className="px-1 text-base bg-transparent outline-none appearance-none cursor-pointer hover:bg-Blue dark:hover:bg-Green"
            onChange={handleIndicatorOpt}
          >
            {indicatorOptions.map((indicatorOpt, index) =>
              selectTime.indicator === indicatorOpt ? (
                <option selected className="text-base">
                  {indicatorOpt}
                </option>
              ) : (
                <option className="text-base">{indicatorOpt}</option>
              )
            )}
          </select>
          <div className="pr-1 pl-7">
            <svg
              className="w-6 h-6 fill-black dark:fill-WhiteBG"
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m15.3 16.7 1.4-1.4-3.7-3.7V7h-2v5.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default TimePicker;
