const Filter = () => {
  return (
    <>
      <div className=" bg-BlueGrey rounded-lg md:w-96 h-96 p-4 md:mr-6 dark:bg-BlueBlack">
        <div className="relative">
          <div className="flex items-center justify-between px-2">
            <div className="text-xl dark:text-WhiteBG">Filter and Sort</div>
            <svg
              className="dark:fill-WhiteBG"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z" />
            </svg>
          </div>
          <div className="p-2 dark:text-WhiteBG">Sorting Tags Here</div>
          <div className="p-2 dark:text-WhiteBG">Filter Tags Here</div>
        </div>
      </div>
    </>
  );
};

export default Filter;
