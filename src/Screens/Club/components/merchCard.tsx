const MerchCard = () => {
  return (
    <>
      <div className="flex-shrink-0 w-64 h-64 snap-end drop-shadow-md ">
        <img
          className="object-cover h-64 bg-center rounded-t-lg w-62"
          src="https://cdn.shopify.com/s/files/1/0336/9297/5240/products/custom-clear-acrylic-keychains-single-side-printing-vograce-1_1080x.jpg"
          alt="merch"
        />
        <div className="w-64 p-4 text-left text-black rounded-b-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG duration-ThemeDuration">
          <h1 className="text-lg font-bold">Keychain Keychain Keychain</h1>
          <p className="text-base">$45</p>
        </div>
      </div>
    </>
  );
};
export default MerchCard;
