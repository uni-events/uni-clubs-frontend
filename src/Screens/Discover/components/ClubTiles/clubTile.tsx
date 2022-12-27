import banner from "../../../../Assets/page-banner.png";
import logo from "../../../../Assets/RGS-logo.png";
const ClubTile = () => {
  return (
    <>
      <body className="p-2 bg-BlueGrey dark:bg-BlackBG rounded-lg">
        <div className="relative">
          <img
            className="rounded-lg w-full h-24 object-cover mb-6"
            src={banner}
            alt="banner"
          />

          <img
            className="absolute h-16 w-16 object-cover left-4 bottom-0 rounded-lg top-16 drop-shadow-lg"
            src={logo}
            alt="logo"
          />

          <div className="text-black whitespace-pre-wrap overflow-hidden p-4 mb-2 max-h-36 dark:text-WhiteBG ">
            <h1 className="font-bold text-lg md:text-xl">Lorem ipsum dolor</h1>
            <h1 className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              scelerisque nibh. Curabitur placerat ante eu luctus tempor. Fusce
              vitae odio mollis, consequat tellus ac, tincidunt enim. Duis quis
              congue sapien. Duis vitae congue quam. Donec quis euismod mauris,
              non vehicula justo. Fusce sed placerat felis, et accumsan nunc.
              Aenean ut ligula ut mi molestie iaculis. Sed posuere, leo eget
              rhoncus feugiat, risus enim gravida magna, in tincidunt massa
              mauris eu justo. In justo ex, fringilla ac consequat quis,
              pulvinar nec enim. Aenean ut mi eros. Etiam dignissim dolor in sem
              elementum, vitae fringilla neque ullamcorper. Integer lobortis
              rhoncus arcu, vel faucibus augue. Aliquam nec nulla feugiat,
              aliquam purus at, iaculis lectus.
            </h1>
          </div>
        </div>
      </body>
    </>
  );
};

export default ClubTile;
