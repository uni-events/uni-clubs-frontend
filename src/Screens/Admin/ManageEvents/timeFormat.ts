import { format, parseISO } from "date-fns";
import { TimeData } from "../../../Data/dataTypes";
export const inputToDate = (date: string): string => {
  return format(new Date(date), "do MMMM yyyy '-' hh:mmaaaaa'm'");
};

export const dateToInput = (date: Date): string => {
  return format(new Date(date), "yyyy-mm-dd'T'hh:mm");
};

export const dateToDay = (date: Date): string => {
  const dateStr =
    String(date.getFullYear()) +
    "-" +
    String(date.getMonth()) +
    "-" +
    String(date.getDay());

  return dateStr;
};

export const dateAndTimeToDate = (date: Date, selectedTime: TimeData) => {
  let hours: number = Number(selectedTime.hours);
  let indicator = selectedTime.indicator;
  if (indicator === "PM") {
    hours += 12;
    console.log(hours);
  }
  const formattedDateStr =
    String(date.getFullYear()) +
    "-" +
    String(date.getMonth()) +
    "-" +
    String(date.getDay()) +
    "T" +
    String(hours) +
    ":" +
    String(selectedTime.minutes) +
    ":00";

  console.log(formattedDateStr);
  const dateReturn = new Date(formattedDateStr);

  return dateReturn;
};
