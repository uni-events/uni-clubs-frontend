import { useState } from "react";
import { longStr } from "../../../Data/dataTypes";

const EventsListEdit = () => {
  const EventDetails = [
    {
      name: "Weekly Meetup",
      time: "19th December 11:00am",
      description: longStr,
      tags: ["food", "free"],
    },
    {
      name: "Weekly BBQ",
      time: "19th December 5:00pm",
      description: longStr,
      tags: ["food", "paid"],
    },
  ];
  const BoolEditStateInit: boolean[] = [];

  EventDetails.forEach(() => {
    BoolEditStateInit.push(false);
  });

  let [editState, setEditState] = useState([...BoolEditStateInit]);

  return (
    <>
      {EventDetails.map((event, index) => {
        return (
          <>
            <div className="w-full h-fit p-4 bg-BlueGrey text-black dark:bg-BlueBlack dark:text-white rounded-lg">
              <div className="flex flex-col">
                {editState[index] ? (
                  <textarea className="text-xl font-bold p-2 rounded-md w-1/4 h-fit focus:outline-none focus:ring-2 focus:ring-Green dark:bg-BlackBG dark:text-white">
                    {event.name}
                  </textarea>
                ) : (
                  <div className="text-xl font-bold">{event.name}</div>
                )}
                {editState[index] ? (
                  <textarea className="p-4 rounded-md w-full h-fit max-h-128 mt-4 focus:outline-none focus:ring-2 focus:ring-Green dark:bg-BlackBG dark:text-white">
                    {event.description}
                  </textarea>
                ) : (
                  <div className="mt-4 text-base">{event.description}</div>
                )}
              </div>
              <div className="flex flex-row justify-between mt-4">
                {editState[index] ? (
                  <input
                    className="rounded-md dark:bg-BlackBG dark:text-white focus:outline-none focus:ring-2 focus:ring-Green"
                    type="datetime-local"
                  />
                ) : (
                  <div className="">{event.time}</div>
                )}
                <div className="flex flex-row space-x-4">
                  {event.tags.includes("food") && (
                    <svg
                      className=" fill-black dark:fill-WhiteBG"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                    >
                      <path d="M13.325 13q-.725-1-2.037-1.5Q9.975 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13ZM1 15q0-1.5.65-2.625t1.7-1.875q1.05-.75 2.4-1.125Q7.1 9 8.5 9t2.75.375q1.35.375 2.4 1.125 1.05.75 1.7 1.875Q16 13.5 16 15Zm0 4v-2h15v2Zm17 4v-2h1.4l1.4-14h-9.55L11 5h5V1h2v4h5l-1.65 16.55q-.075.6-.538 1.025Q20.35 23 19.7 23Zm0-2h1.4H18ZM2 23q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23Zm6.5-10Z" />
                    </svg>
                  )}
                  {event.tags.includes("paid") && (
                    <svg
                      className="fill-black dark:fill-WhiteBG"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                    >
                      <path d="M11.1 19h1.75v-1.25q1.25-.225 2.15-.975.9-.75.9-2.225 0-1.05-.6-1.925T12.9 11.1q-1.5-.5-2.075-.875-.575-.375-.575-1.025 0-.65.463-1.025.462-.375 1.337-.375.8 0 1.25.388.45.387.65.962l1.6-.65q-.275-.875-1.012-1.525-.738-.65-1.638-.725V5h-1.75v1.25q-1.25.275-1.95 1.1-.7.825-.7 1.85 0 1.175.688 1.9.687.725 2.162 1.25 1.575.575 2.188 1.025.612.45.612 1.175 0 .825-.588 1.212-.587.388-1.412.388t-1.462-.513q-.638-.512-.938-1.537l-1.65.65q.35 1.2 1.088 1.938.737.737 1.912 1.012Zm.9 3q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
                    </svg>
                  )}
                </div>
              </div>
              {!editState[index] ? (
                <div className="flex flex-row float-left mt-4">
                  <button
                    className="text-white font-bold bg-Green hover:bg-DarkGreen px-4 py-2 w-fit h-fit rounded-lg"
                    onClick={() => {
                      editState[index] = !editState[index];
                      setEditState([...editState]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <div className="flex flex-row justify-between space-x-4 mt-4">
                  <button
                    className="text-white font-bold bg-Red hover:bg-DarkRed px-4 py-2 w-fit h-fit rounded-lg"
                    onClick={() => {
                      editState[index] = false;
                      setEditState([...editState]);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white font-bold bg-Blue hover:bg-DarkBlue px-4 py-2 w-fit h-fit rounded-lg"
                    onClick={() => {
                      editState[index] = false;
                      setEditState([...editState]);
                    }}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};
export default EventsListEdit;
