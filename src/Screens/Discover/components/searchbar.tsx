const SearchBar = () => {
  return (
    <>
      <form className="flex items-center w-full">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-BlackBG dark:fill-WhiteBG"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-BlueGrey text-black text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-Green block w-full pl-10 p-2.5  dark:bg-BlueBlack dark:placeholder-BlueGrey dark:text-white"
            placeholder="Search"
            required
          />
        </div>
      </form>
      {/* <div className="relative w-full">
        <div className=" flex items-center justify-center">
          <input
            className=" bg-BlueGrey rounded-tl-lg rounded-bl-lg h-12 pl-4 pr-0 focus:outline-none focus:shadow-outline xs:w-11/12 dark:bg-BlueBlack dark:text-WhiteBG"
            placeholder="Search"
            type="text"
          />
          <button className="bg-BlueGrey rounded-tr-lg rounded-br-lg h-12 p-auto pr-4 pl-0 mr-4 dark:bg-BlueBlack">
            <svg
              className="fill-black dark:fill-WhiteBG"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
            </svg>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default SearchBar;
