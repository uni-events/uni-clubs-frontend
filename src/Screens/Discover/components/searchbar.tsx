const SearchBar = () => {
  return (
    <>
      <div className="relative">
        <div className=" flex items-center justify-center">
          <input
            className=" bg-BlueGrey rounded-tl-lg rounded-bl-lg h-12 pl-4 pr-0 ml-6 focus:outline-none focus:shadow-outline xs:w-11/12 dark:bg-BlueBlack dark:text-WhiteBG"
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
      </div>
    </>
  );
};

export default SearchBar;
