import { MessageData } from "../../../Data/dataTypes";

const ReviewInboxPreview = ({ message }: { message: MessageData }) => {
  return (
    <>
      <div className="w-full duration-150 border-l-0 h-fit hover:bg-LightBlueGrey border-l-BlackBG hover:dark:bg-LightBlueBlack dark:border-l-WhiteBG hover:border-l-4">
        <div className="flex flex-col items-center justify-between px-4 pt-4 md:flex-row">
          <h1 className="text-base font-bold md:text-lg ">{message.author}</h1>
          <div className="grid grid-cols-5 gap-0.5 ">
            {[...Array(message.rating)].map(() => (
              <svg
                className="fill-black dark:fill-WhiteBG"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
              </svg>
            ))}
          </div>
        </div>
        <h1 className="h-12 px-4 pt-0 pb-2 text-sm text-center whitespace-normal md:text-base sm:text-left overflow-clip">
          {message.content}
          <p className="inline-block">...</p>
        </h1>
      </div>
    </>
  );
};

export default ReviewInboxPreview;
