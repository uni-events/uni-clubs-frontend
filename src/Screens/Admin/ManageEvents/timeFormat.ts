import { format } from "date-fns";
export const inputToDate = (date: string): string => {
  return format(new Date(date), "do MMMM yyyy '-' hh:mmaaaaa'm'");
};

export const dateToInput = (date: Date): string => {
  return format(new Date(date), "yyyy-mm-dd'T'hh:mm");
};
