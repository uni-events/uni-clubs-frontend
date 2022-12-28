const SingleEventCard = () => {
  return (
    <>
      <div className="snap-center flex-shrink-0 w-56 h-56 bg-BlueGrey dark:bg-BlueBlack dark:text-white rounded-lg p-2 space-y-2">
        <img
          className="h-28 w-full object-cover bg-center rounded-lg"
          src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
          alt="eventPic"
        />
        <div className="flex flex-row content-center justify-between px-1 py-1 my-auto">
          <div className="h-full w-40 space-y-2">
            <h1 className="font-bold text-sm">Weekly Meetup</h1>
            <h1 className="font-light text-xs">
              PCSoc: Computer Enthusiast Society
            </h1>
          </div>
          <img
            className="h-8 w-8 rounded-lg object-cover bg-center"
            src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
            alt="clubLogo"
          />
        </div>
      </div>
    </>
  );
};
export default SingleEventCard;
