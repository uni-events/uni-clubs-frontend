const SingleEventCard = () => {
  return (
    <>
      <div className="flex-shrink-0 w-56 h-56 snap-center md:snap-start">
        <div className="p-2 space-y-2 rounded-lg bg-BlueGrey dark:bg-BlueBlack dark:text-white">
          <img
            className="object-cover w-full bg-center rounded-lg h-28"
            src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
            alt="eventPic"
          />
          <div className="flex flex-row content-center justify-between px-1 py-1">
            <div className="w-40 h-full space-y-2">
              <h1 className="text-sm font-bold">Weekly Meetup</h1>
              <h1 className="text-xs font-light">
                PCSoc: Computer Enthusiast Society
              </h1>
            </div>
            <img
              className="object-cover w-8 h-8 bg-center rounded-lg"
              src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt="clubLogo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleEventCard;
