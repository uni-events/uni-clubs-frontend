import ReviewPreview from "./review";

const RecentReviews = () => {
  return (
    <>
      <div className="w-full p-4 rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
        <div className="flex flex-row justify-between px-4 py-2">
          <h1 className="text-2xl font-bold">Recent Reviews</h1>

          <svg
            className="fill-black dark:fill-white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
          </svg>
        </div>
        <ReviewPreview />
        <ReviewPreview />
        <ReviewPreview />
        <ReviewPreview />
      </div>
    </>
  );
};

export default RecentReviews;
