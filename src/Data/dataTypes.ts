export interface EventsCardData {
  name: string;
  date: string;
  image: string;
}
export interface CategoryData {
  name: string;
}
export interface FilterData {
  name: string;
  opposite: string;
}
export interface sliderOpts {
  op1: boolean;
  op2: boolean;
}
export const longStr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae massa in rutrum. Maecenas nec consectetur libero. Fusce in dapibus tortor, sit amet faucibus arcu. Suspendisse vel nunc turpis. Pellentesque justo risus, gravida et metus id, vestibulum rutrum libero. Donec molestie vehicula ornare. Quisque ultrices odio ac ante tincidunt egestas.";

export interface EventDetailsData {
  name: string;
  time: string;
  description: string;
  tags: string[];
}

export interface TimeData {
  hours: number;
  minutes: number;
  indicator: string;
}

export interface ClubTileData {
  clubStr: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  tags: string[];
  categories: string[];
}

export interface TagsData {
  filters: string[];
  categories: string[];
}
