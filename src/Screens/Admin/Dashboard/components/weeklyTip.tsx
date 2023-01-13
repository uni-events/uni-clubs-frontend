const WeeklyTip = () => {
  return (
    <>
      <div className="w-full p-4 rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
        <div className="flex flex-row justify-between px-4 py-2">
          <h1 className="text-2xl font-bold">Tip of the Week</h1>
          <svg
            className="fill-black dark:fill-WhiteBG"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="m22 10-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625Zm-3-4-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95ZM9 22q-.825 0-1.412-.587Q7 20.825 7 20h4q0 .825-.587 1.413Q9.825 22 9 22Zm-4-3v-2h8v2Zm.25-3q-1.725-1.025-2.737-2.75Q1.5 11.525 1.5 9.5q0-3.125 2.188-5.312Q5.875 2 9 2q3.125 0 5.312 2.188Q16.5 6.375 16.5 9.5q0 2.025-1.012 3.75-1.013 1.725-2.738 2.75Zm.6-2h6.3q1.125-.8 1.737-1.975.613-1.175.613-2.525 0-2.3-1.6-3.9T9 4Q6.7 4 5.1 5.6T3.5 9.5q0 1.35.613 2.525Q4.725 13.2 5.85 14ZM9 14Z"></path>
          </svg>
        </div>
        <h1 className="px-4 py-2 text-base whitespace-normal overflow-clip">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          scelerisque nibh. Curabitur placerat ante eu luctus tempor.
        </h1>
      </div>
    </>
  );
};

export default WeeklyTip;
