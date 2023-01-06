import { format } from "date-fns";
export const inputToDate = (date: string): string => {
  return format(new Date(date), "do MMMM yyyy");
};
