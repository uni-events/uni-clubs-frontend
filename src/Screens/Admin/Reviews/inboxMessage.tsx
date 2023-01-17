import { MessageData } from "../../../Data/dataTypes";

const InboxMessage = ({ message }: { message: MessageData }) => {
  return (
    <>
      <div className="text-black dark:text-white">
        <div className="flex flex-col mx-8 mb-8">
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="text-lg font-extrabold">From</h1>
            <p className="text-base">{message.author}</p>
          </div>
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="text-lg font-extrabold">Date</h1>
            <p className="text-base">{String(message.dateSent)}</p>
          </div>
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="text-lg font-extrabold">Event</h1>
            <button className="inline-block h-8 px-2 text-base font-extrabold rounded-lg text-WhiteBG bg-Purple w-fit hover:bg-Green">
              {message.eventName}
            </button>
          </div>
          <div className="flex flex-row space-x-4 text-lg">
            <h1 className="text-lg font-extrabold">Rating</h1>
            <div className="flex flex-row gap-1">
              {[...Array(message.rating)].map((e, i) => (
                <svg
                  className="fill-black dark:fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  key={i}
                >
                  <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="p-8 mt-8 text-black bg-WhiteBG dark:text-white dark:bg-BlackBG duration-ThemeDuration">
            {message.content}
          </div>
        </div>
      </div>
    </>
  );
};
export default InboxMessage;
