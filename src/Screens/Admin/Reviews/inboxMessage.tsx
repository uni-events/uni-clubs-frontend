const InboxMessage = () => {
  const longStr =
    "ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur";

  return (
    <>
      <div className=" text-black dark:text-white">
        <div className="flex flex-col mb-8 mx-8">
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="font-extrabold text-lg">From</h1>
            <p className="text-base">Anonymous</p>
          </div>
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="font-extrabold text-lg">Date</h1>
            <p className="text-base">11/3/2022 10:00pm</p>
          </div>
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="font-extrabold text-lg">Event</h1>
            <button className="inline-block text-base text-WhiteBG bg-Purple w-fit h-8 px-2 font-extrabold rounded-lg hover:bg-Green">
              Yearly Flagship Event
            </button>
          </div>
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="font-extrabold text-lg">Rating</h1>
            <div className="flex flex-row gap-1">
              <svg
                className="fill-black dark:fill-WhiteBG"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
              </svg>
              <svg
                className="fill-black dark:fill-WhiteBG"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
              </svg>
              <svg
                className="fill-black dark:fill-WhiteBG"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
              </svg>
              <svg
                className="fill-black dark:fill-WhiteBG"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
              </svg>
              <svg
                className="fill-black dark:fill-WhiteBG"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
              </svg>
            </div>
          </div>
          <div className="text-black bg-WhiteBG dark:text-white dark:bg-BlackBG p-8 mt-8">
            {longStr}
          </div>
        </div>
      </div>
    </>
  );
};
export default InboxMessage;
