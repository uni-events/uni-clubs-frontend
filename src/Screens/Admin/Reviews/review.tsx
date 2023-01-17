import { useState } from "react";
import AdminNavbar from "../../../Components/adminNavbar";
import { MessageData, longStr } from "../../../Data/dataTypes";
import ReviewInboxPreview from "./ReviewInboxPreview";
import InboxMessage from "./inboxMessage";

const AdminReview = () => {
  const messages: MessageData[] = [
    {
      author: "anon",
      rating: 4,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 3,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 2,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 1,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 4,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 2,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 4,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 3,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
    {
      author: "anon",
      rating: 4,
      eventName: "Weekly Meetup",
      dateSent: new Date(),
      content: longStr,
    },
  ];

  const [messageData, setMessageData] = useState([...messages]);
  const [messageToDisplay, setMessageToDisplay] = useState(messages[0]);

  const handleClick = (message: MessageData) => {
    setMessageToDisplay(message);
  };
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-clip bg-WhiteBG dark:bg-BlackBG pb-28 duration-ThemeDuration">
        <AdminNavbar />
        <div className="flex flex-row h-full px-4">
          <div className="h-full p-4 overflow-y-scroll text-black border-r-2 w-96 dark:text-white bg-BlueGrey dark:bg-BlueBlack scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg rounded-l-xl border-Green dark:border-Blue duration-ThemeDuration">
            <div>
              {messages.map((message, index) => {
                return (
                  <button onClick={() => handleClick(message)}>
                    <ReviewInboxPreview message={message} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full h-full p-4 overflow-y-scroll bg-LightBlueGrey dark:bg-LightBlueBlack scrollbar-thin scrollbar-track-transparent scrollbar-thumb-DarkBlueGrey dark:scrollbar-thumb-BlueGrey scrollbar-thumb-rounded-lg rounded-r-xl duration-ThemeDuration">
            <InboxMessage message={messageToDisplay} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReview;
