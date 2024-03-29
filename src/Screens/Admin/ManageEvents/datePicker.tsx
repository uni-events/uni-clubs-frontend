import { useState, useEffect } from "react";
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay,
  setDate,
} from "date-fns";

type DatepickerType = "date" | "month" | "year";

const DatePickerComponent = ({
  onChange,
  value,
}: {
  onChange: Function;
  value: Date;
}) => {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [dayCount, setDayCount] = useState<Array<number>>([]);
  const [blankDays, setBlankDays] = useState<Array<number>>([]);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(value);
  const [type, setType] = useState<DatepickerType>("date");
  const decrement = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => subYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => addYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const isToday = (date: number) => {
    const isTodayBool: boolean = isEqual(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date),
      selectedDate
    );
    return isTodayBool;
  };

  const setDateValue = (date: number) => {
    setSelectedDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        datepickerHeaderDate.getMonth(),
        date
      )
    );
    // do not touch this variable, as the useState
    // for selectedDate does not update its value
    // right after being called above
    const chosenDate = new Date(
      datepickerHeaderDate.getFullYear(),
      datepickerHeaderDate.getMonth(),
      date
    );
    toggleDatepicker();
    onChange(chosenDate);
  };

  const getDayCount = (date: Date) => {
    let daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
    let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  const isSelectedMonth = (month: number) =>
    isEqual(
      new Date(selectedDate.getFullYear(), month, selectedDate.getDate()),
      selectedDate
    );

  const setMonthValue = (month: number) => () => {
    setDatepickerHeaderDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        month,
        datepickerHeaderDate.getDate()
      )
    );
    setType("date");
  };

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

  const showMonthPicker = () => setType("month");

  const showYearPicker = () => setType("date");

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  return (
    <div className="flex items-center justify-center h-fit w-fit">
      <div className="relative">
        <input type="hidden" name="date" />
        <input
          type="text"
          readOnly
          className="w-full py-4 pl-4 pr-10 text-black rounded-lg cursor-pointer bg-WhiteBG dark:bg-BlackBG focus:outline-none focus:ring-2 focus:ring-Green dark:text-white duration-ThemeDuration"
          placeholder="Select date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onClick={toggleDatepicker}
        />
        <div
          className="absolute top-0 right-0 px-4 py-4 cursor-pointer"
          onClick={toggleDatepicker}
        >
          <svg
            className="w-6 h-6 text-black dark:text-WhiteBG"
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        {showDatepicker && (
          <div
            className="absolute top-0 left-0 p-4 mt-12 rounded-lg shadow bg-WhiteBG dark:bg-BlackBG duration-ThemeDuration"
            style={{ width: "17rem" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <button
                  type="button"
                  className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-Blue dark:hover:bg-Green"
                  onClick={decrement}
                >
                  <svg
                    className="inline-flex w-6 h-6 text-black dark:text-WhiteBG"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              {type === "date" && (
                <div
                  onClick={showMonthPicker}
                  className="flex-grow p-1 text-lg font-bold text-black rounded-lg cursor-pointer dark:text-WhiteBG hover:bg-Blue dark:hover:bg-Green"
                >
                  <p className="text-center">
                    {format(datepickerHeaderDate, "MMMM")}
                  </p>
                </div>
              )}
              <div
                onClick={showYearPicker}
                className="flex-grow p-1 text-lg font-bold text-black dark:text-WhiteBG"
              >
                <p className="text-center">
                  {format(datepickerHeaderDate, "yyyy")}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-Blue dark:hover:bg-Green"
                  onClick={increment}
                >
                  <svg
                    className="inline-flex w-6 h-6 text-black dark:text-WhiteBG"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {type === "date" && (
              <>
                <div className="flex flex-wrap mb-3 -mx-1">
                  {DAYS.map((day, i) => (
                    <div key={i} style={{ width: "14.26%" }} className="px-1">
                      <div className="text-xs font-medium text-center text-black dark:text-WhiteBG">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap -mx-1">
                  {blankDays.map((_, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="p-1 text-sm text-center border border-transparent"
                    />
                  ))}
                  {dayCount.map((d, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="px-1 mb-1"
                    >
                      <div
                        onClick={() => {
                          setDateValue(d);
                        }}
                        className={`cursor-pointer text-center text-sm rounded-lg leading-loose transition ease-in-out duration-100 ${
                          isToday(d)
                            ? "dark:bg-Green bg-Blue text-white"
                            : "text-black dark:text-WhiteBG hover:bg-Blue dark:hover:bg-Green hover:font-bold hover:text-white"
                        }`}
                      >
                        {d}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {type === "month" && (
              <div className="flex flex-wrap -mx-1">
                {Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      onClick={setMonthValue(i)}
                      style={{ width: "25%" }}
                    >
                      <div
                        className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-Blue dark:hover:bg-Green ${
                          isSelectedMonth(i)
                            ? "dark:bg-Green bg-Blue text-white"
                            : "text-black dark:text-WhiteBG hover:bg-Blue dark:hover:bg-Green"
                        }`}
                      >
                        {format(
                          new Date(
                            datepickerHeaderDate.getFullYear(),
                            i,
                            datepickerHeaderDate.getDate()
                          ),
                          "MMM"
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}{" "}
            {/* {{type === "year" && (
                      <Datepicker
                        datepickerHeaderDate={datepickerHeaderDate}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        closeDatepicker={() => setShowDatepicker(false)}
                      />
              )}} */}
          </div>
        )}
      </div>
    </div>
  );
};
export default DatePickerComponent;
