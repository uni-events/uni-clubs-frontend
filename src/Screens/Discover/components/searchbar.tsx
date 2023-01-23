const SearchBar = ({
  purpose,
  onChange,
}: {
  purpose: string;
  onChange: Function;
}) => {
  const handleInput = (event: any) => {
    onChange(String(event.target.value));
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        className="z-0 flex items-center w-full drop-shadow-sm"
        onSubmit={handleFormSubmit}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 fill-BlackBG dark:fill-WhiteBG"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-BlueGrey text-black text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-Green block w-full pl-10 p-2.5  dark:bg-BlueBlack dark:placeholder-BlueGrey dark:text-white duration-ThemeDuration"
            placeholder={`Search for ${purpose}`}
            onChange={handleInput}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
