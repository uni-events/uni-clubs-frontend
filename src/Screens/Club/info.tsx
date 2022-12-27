const ClubInfo = () => {
  return (
    <>
      <div className=" mt-0">
        <div
          className=" bg-fixed h-40"
          style={{
            backgroundImage: `url(${require("../../Assets/page-banner.png")})`,
          }}
        ></div>
        <div className="bg-white p-4 sm:p-8">
          <div className="font-inter font-extrabold text-2xl text-black tracking-tight">
            My trip to the summit
          </div>
          <div className="mt-1 font-medium text-sm text-slate-500">
            November 16, 2021 · 4 min read
          </div>
          <p className="mt-4 leading-7 text-slate-500">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          </p>
        </div>
      </div>
    </>
  );
};

export default ClubInfo;
