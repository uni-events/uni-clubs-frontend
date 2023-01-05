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
                <div className="text-xl font-bold">{event.name}</div>
                <div className="">{event.description}</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="">{event.time}</div>
                <div className="">{event.tags}</div>
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
