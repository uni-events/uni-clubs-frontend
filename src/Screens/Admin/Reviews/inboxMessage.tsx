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
          <div className="p-8 mt-8 text-black bg-WhiteBG dark:text-white dark:bg-BlackBG duration-ThemeDuration">
            {message.content}
          </div>
        </div>
      </div>
    </>
  );
};
export default InboxMessage;
