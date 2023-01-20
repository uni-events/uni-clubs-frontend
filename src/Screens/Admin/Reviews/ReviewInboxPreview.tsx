import { MessageData } from "../../../Data/dataTypes";

const ReviewInboxPreview = ({ message }: { message: MessageData }) => {
  let previewStrLen = 80;
  let displayContentStr = message.content;
  message.content.length > previewStrLen &&
    (displayContentStr = message.content.substring(0, previewStrLen) + "...");

  return (
    <>
      <div className="w-full duration-150 border-l-0 h-fit hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack dark:border-l-WhiteBG hover:border-l-4">
        <div className="flex flex-col items-center justify-between px-4 pt-4 md:flex-row">
          <h1 className="text-base font-bold md:text-lg ">{message.author}</h1>
          <div className="grid grid-cols-5 gap-0.5 ">
            {[...Array(message.rating)].map((e, i) => (
              <svg
                height="24"
                width="24"
                className="fill-black dark:fill-WhiteBG"
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="p-2 px-4 text-sm text-center whitespace-normal md:text-base sm:text-left">
          {displayContentStr}
        </p>
      </div>
    </>
  );
};

export default ReviewInboxPreview;
