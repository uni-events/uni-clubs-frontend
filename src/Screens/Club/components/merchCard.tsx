const MerchCard = () => {
  return (
    <>
      {/* <div className="snap-center bg-green-300"></div> */}
      <div className="flex-shrink-0 snap-end w-64 h-64 drop-shadow-md ">
        <img
          className="h-64 w-62 object-cover bg-center rounded-t-lg"
          src="https://cdn.shopify.com/s/files/1/0336/9297/5240/products/custom-clear-acrylic-keychains-single-side-printing-vograce-1_1080x.jpg"
          alt="merch"
        />
        <div className="h-fit w-64 p-4 text-left bg-BlueGrey dark:bg-BlueBlack text-black dark:text-WhiteBG rounded-b-lg">
          <h1 className="text-lg font-bold">Keychain Keychain Keychain</h1>
          <p className="text-base">$45</p>
        </div>
      </div>
    </>
  );
};
export default MerchCard;
