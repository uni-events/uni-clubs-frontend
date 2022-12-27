const ExecutiveCard = () => {
  const longStr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae massa in rutrum. Maecenas nec consectetur libero. Fusce in dapibus tortor, sit amet faucibus arcu. Suspendisse vel nunc turpis. Pellentesque justo risus, gravida et metus id, vestibulum rutrum libero. Donec molestie vehicula ornare. Quisque ultrices odio ac ante tincidunt egestas.";
  return (
    <>
      <div className="w-full h-fit p-4 rounded-lg bg-BlueGrey dark:bg-BlueBlack text-black dark:text-WhiteBG">
        {longStr}
      </div>
    </>
  );
};
export default ExecutiveCard;
