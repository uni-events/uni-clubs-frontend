import { longStr } from "./dataTypes";

export const eventDetails: {
  clubStr: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  event: string;
  tags: string[];
  categories: string[];
}[] = [
  {
    clubStr: "catsoc",
    name: "Cat Appreciation Society",
    description: longStr,
    logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    event: "Cat Petting Stall",
    tags: ["Free", "No Food", "On Campus"],
    categories: ["Hobby"],
  },
];
