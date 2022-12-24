import ReviewInboxPreview from "./ReviewInboxPreview";

const longStr =
  "ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. LoremLorem ipsum dolor sit amet, consectetur";

const Inbox = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-row justify-between px-6 py-8  bg-LightBlueGrey dark:bg-BlueBlack dark:text-WhiteBG">
          <h1 className="text-3xl mx-4 font-bold">Review Inbox</h1>
          <svg
            className="fill-black dark:fill-WhiteBG   "
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="m22 10-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625Zm-3-4-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95ZM9 22q-.825 0-1.412-.587Q7 20.825 7 20h4q0 .825-.587 1.413Q9.825 22 9 22Zm-4-3v-2h8v2Zm.25-3q-1.725-1.025-2.737-2.75Q1.5 11.525 1.5 9.5q0-3.125 2.188-5.312Q5.875 2 9 2q3.125 0 5.312 2.188Q16.5 6.375 16.5 9.5q0 2.025-1.012 3.75-1.013 1.725-2.738 2.75Zm.6-2h6.3q1.125-.8 1.737-1.975.613-1.175.613-2.525 0-2.3-1.6-3.9T9 4Q6.7 4 5.1 5.6T3.5 9.5q0 1.35.613 2.525Q4.725 13.2 5.85 14ZM9 14Z"></path>
          </svg>
        </div>
        <div className="grid grid-cols-3 h-[80vh] gap-4 px-6 pb-4 bg-LightBlueGrey dark:bg-BlueBlack dark:text-WhiteBG">
          <div className="w-full overflow-y-scroll col-span-3 md:col-span-1 scrollbar-thin scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-xl scrollbar-track-transparent ">
            <div className="mx-2">
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
              <button className="border-l-0 hover:bg-BlueGrey border-l-BlackBG hover:dark:bg-BlackBG  dark:border-l-WhiteBG hover:border-l-4">
                <ReviewInboxPreview />
              </button>
            </div>
          </div>
          <div className="w-full overflow-y-scroll col-span-2 scrollbar-thin scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-xl scrollbar-track-transparent hidden md:flex">
            <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
