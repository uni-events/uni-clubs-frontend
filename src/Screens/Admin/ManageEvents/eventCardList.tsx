import React, { useState } from "react";
import { EventDetailsData, longStr } from "../../../Data/dataTypes";
import { dateToInput, inputToDate } from "./timeFormat";
import DatePickerComponent from "./datePicker";
import TimePicker from "./timePicker";

const EventDetails: EventDetailsData[] = [
  {
    name: "Weekly Meetup",
    time: "2023-01-01T08:30",
    description: longStr,
    tags: ["food", "free"],
  },
  {
    name: "Weekly BBQ",
    time: "2023-06-01T22:30",
    description: longStr,
    tags: ["no-food", "paid"],
  },
  {
    name: "Weekly somethign rreally long name",
    time: "2023-06-01T08:30",
    description: longStr,
    tags: ["paid", "no-food"],
  },
  {
    name: "Literally nothing lmao",
    time: "2023-06-01T08:30",
    description: longStr,
    tags: ["free", "no-food"],
  },
];
const BoolEditStateInit: boolean[] = [];

EventDetails.forEach(() => {
  BoolEditStateInit.push(false);
});

// defining sets of 1ags and opposites
const iconTagSet: { tag: string; tagOpp: string }[] = [
  { tag: "free", tagOpp: "paid" },
  { tag: "paid", tagOpp: "free" },
  { tag: "food", tagOpp: "no-food" },
  { tag: "no-food", tagOpp: "food" },
];

const ViewAllEventCards = () => {
  let [editState, setEditState] = useState([...BoolEditStateInit]);
  let [finalEventsInfoState, setFinalEventsInfoState] = useState([
    ...EventDetails,
  ]);

  const ViewEventCard = ({
    event,
    index,
  }: {
    event: EventDetailsData;
    index: number;
  }) => {
    const formattedTime: string = inputToDate(event.time);

    return (
      <>
        <div className="w-full p-4 text-black rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-white">
          <div className="flex flex-col">
            <div className="text-xl font-bold">{event.name}</div>
            <div className="mt-4 text-base">{event.description}</div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div className="text-lg">{formattedTime}</div>

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
              {event.tags.includes("no-food") && (
                <svg
                  className="fill-black dark:fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="M21.625 18.75 19.8 16.925 20.8 7h-9.55L11 5h5V1h2v4h5Zm-6-5.975Zm4.85 10.525L.675 3.5 2.1 2.075l19.8 19.8ZM1 19v-2h15v2Zm1 4q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23ZM9.05 9.025v2q-.125 0-.275-.013Q8.625 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13h9.35l2 2H1q0-3.025 2.338-4.512Q5.675 9 8.5 9q.125 0 .275.012.15.013.275.013ZM8.5 13Z" />
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
              {event.tags.includes("free") && (
                <svg
                  className="fill-black dark:fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="M14.35 8.55q-.3-.75-.887-1.175-.588-.425-1.413-.425-.45 0-.875.125t-.775.475L8.95 6.1q.35-.35.95-.637.6-.288 1.1-.363V3h2v2.05q1.125.225 1.975.912.85.688 1.275 1.788ZM19.8 22.6 15.2 18q-.375.375-1.025.613-.65.237-1.175.287V21h-2v-2.15q-1.4-.35-2.337-1.275-.938-.925-1.363-2.325l2-.8q.3 1.05 1.012 1.8.713.75 1.888.75.45 0 .825-.113.375-.112.725-.337L1.4 4.2l1.4-1.4 18.4 18.4Z" />
                </svg>
              )}
            </div>
          </div>

          <div className="flex flex-row float-left mt-4">
            <button
              className="px-4 py-2 font-bold text-white rounded-lg bg-Green hover:bg-DarkGreen w-fit h-fit"
              onClick={() => {
                editState[index] = !editState[index];
                setEditState([...editState]);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </>
    );
  };

  const EditEventCard = ({
    event,
    index,
  }: {
    event: EventDetailsData;
    index: number;
  }) => {
    const eventDetailsInit = {
      name: event.name,
      description: event.description,
      time: event.time,
      tags: event.tags,
    };
    const [eventDetails, setEventDetails] = useState({ ...eventDetailsInit });

    const changeName = (event: any) => {
      eventDetails.name = event.target.value;
      setEventDetails({ ...eventDetails });
    };

    const changeDescription = (event: any) => {
      eventDetails.description = event.target.value;
      setEventDetails({ ...eventDetails });
    };

    const changeDate = (event: any) => {
      eventDetails.time = event;
      setEventDetails({ ...eventDetails });
    };

    const handleSave = () => {
      editState[index] = false;
      setEditState([...editState]);
      finalEventsInfoState[index] = eventDetails;
      setFinalEventsInfoState([...finalEventsInfoState]);
    };

    const handleCancel = () => {
      editState[index] = false;
      setEditState([...editState]);
    };

    const handleIconClick = (icon: string, index: number) => {
      let currTag = iconTagSet.find((t) => t.tag === icon);
      // removing the current tag
      eventDetails.tags = eventDetails.tags.filter((tag) => tag !== icon);
      // pushing the opposite tag as it is a toggle button
      if (currTag !== undefined) {
        eventDetails.tags.push(currTag.tagOpp);
      }
      setEventDetails({ ...eventDetails });
    };

    return (
      <>
        <div className="w-full p-4 text-black rounded-lg h-fit bg-BlueGrey dark:bg-BlueBlack dark:text-white">
          <div className="space-y-2">
            <h1 className="pl-2 text-lg font-semibold">Title</h1>
            <input
              placeholder={eventDetails.name}
              className="p-2 text-base font-bold rounded-md md:text-xl w-fit h-fit focus:outline-none focus:ring-2 focus:ring-Green dark:bg-BlackBG dark:text-white"
              value={eventDetails.name}
              onChange={changeName}
            />
          </div>
          <div className="mt-4 space-y-2">
            <h1 className="pl-2 text-lg font-semibold">Description</h1>
            <textarea
              spellCheck={true}
              autoCorrect="on"
              className="w-full p-4 text-sm rounded-md md:text-base h-fit max-h-128 focus:outline-none focus:ring-2 focus:ring-Green dark:bg-BlackBG dark:text-white"
              value={eventDetails.description}
              onChange={changeDescription}
            >
              {eventDetails.description}
            </textarea>
          </div>

          <div className="flex flex-col justify-start md:flex-row md:space-x-4">
            <div className="mt-2 space-y-2">
              <h1 className="pl-2 text-lg font-semibold">Date</h1>
              <DatePickerComponent
                onChange={changeDate}
                value={new Date(eventDetails.time)}
              />
            </div>
            <div className="flex flex-col xs:flex-row xs:space-x-4">
              <div className="mt-2 space-y-2">
                <h1 className="pl-2 text-lg font-semibold">Time</h1>
                <TimePicker
                  date={new Date(eventDetails.time)}
                  onChange={changeDate}
                />
              </div>
              <div className="mt-2 space-y-2">
                <h1 className="pl-2 text-lg font-semibold">Tags</h1>
                <div className="flex flex-row p-2 mt-4 rounded-lg w-fit md:mt-0 bg-WhiteBG dark:bg-BlackBG">
                  <button
                    onClick={() => handleIconClick("food", index)}
                    className={`hover:bg-Blue dark:hover:bg-Green p-2 rounded-lg
                    ${eventDetails.tags.includes("food") ? "block" : "hidden"}
                    `}
                  >
                    <svg
                      className="w-6 h-6 fill-black dark:fill-WhiteBG"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.325 13q-.725-1-2.037-1.5Q9.975 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13ZM1 15q0-1.5.65-2.625t1.7-1.875q1.05-.75 2.4-1.125Q7.1 9 8.5 9t2.75.375q1.35.375 2.4 1.125 1.05.75 1.7 1.875Q16 13.5 16 15Zm0 4v-2h15v2Zm17 4v-2h1.4l1.4-14h-9.55L11 5h5V1h2v4h5l-1.65 16.55q-.075.6-.538 1.025Q20.35 23 19.7 23Zm0-2h1.4H18ZM2 23q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23Zm6.5-10Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleIconClick("no-food", index)}
                    className={`hover:bg-Blue dark:hover:bg-Green p-2 rounded-lg
                    ${
                      eventDetails.tags.includes("no-food") ? "block" : "hidden"
                    }`}
                  >
                    <svg
                      className="w-6 h-6 fill-black dark:fill-WhiteBG"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.625 18.75 19.8 16.925 20.8 7h-9.55L11 5h5V1h2v4h5Zm-6-5.975Zm4.85 10.525L.675 3.5 2.1 2.075l19.8 19.8ZM1 19v-2h15v2Zm1 4q-.425 0-.712-.288Q1 22.425 1 22v-1h15v1q0 .425-.287.712Q15.425 23 15 23ZM9.05 9.025v2q-.125 0-.275-.013Q8.625 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13h9.35l2 2H1q0-3.025 2.338-4.512Q5.675 9 8.5 9q.125 0 .275.012.15.013.275.013ZM8.5 13Z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleIconClick("paid", index)}
                    className={`hover:bg-Blue dark:hover:bg-Green p-2 rounded-lg
                      ${
                        eventDetails.tags.includes("paid") ? "block" : "hidden"
                      }`}
                  >
                    <svg
                      className="w-6 h-6 fill-black dark:fill-WhiteBG"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.1 19h1.75v-1.25q1.25-.225 2.15-.975.9-.75.9-2.225 0-1.05-.6-1.925T12.9 11.1q-1.5-.5-2.075-.875-.575-.375-.575-1.025 0-.65.463-1.025.462-.375 1.337-.375.8 0 1.25.388.45.387.65.962l1.6-.65q-.275-.875-1.012-1.525-.738-.65-1.638-.725V5h-1.75v1.25q-1.25.275-1.95 1.1-.7.825-.7 1.85 0 1.175.688 1.9.687.725 2.162 1.25 1.575.575 2.188 1.025.612.45.612 1.175 0 .825-.588 1.212-.587.388-1.412.388t-1.462-.513q-.638-.512-.938-1.537l-1.65.65q.35 1.2 1.088 1.938.737.737 1.912 1.012Zm.9 3q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleIconClick("free", index)}
                    className={`hover:bg-Blue dark:hover:bg-Green p-2 rounded-lg
                      ${
                        eventDetails.tags.includes("free") ? "block" : "hidden"
                      }`}
                  >
                    <svg
                      className="w-6 h-6 fill-black dark:fill-WhiteBG"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.35 8.55q-.3-.75-.887-1.175-.588-.425-1.413-.425-.45 0-.875.125t-.775.475L8.95 6.1q.35-.35.95-.637.6-.288 1.1-.363V3h2v2.05q1.125.225 1.975.912.85.688 1.275 1.788ZM19.8 22.6 15.2 18q-.375.375-1.025.613-.65.237-1.175.287V21h-2v-2.15q-1.4-.35-2.337-1.275-.938-.925-1.363-2.325l2-.8q.3 1.05 1.012 1.8.713.75 1.888.75.45 0 .825-.113.375-.112.725-.337L1.4 4.2l1.4-1.4 18.4 18.4Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4 space-x-4">
            <button
              className="px-4 py-2 font-bold text-white rounded-lg bg-Red hover:bg-DarkRed w-fit h-fit"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 font-bold text-white rounded-lg bg-Blue hover:bg-DarkBlue w-fit h-fit"
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col w-full space-y-8">
      {finalEventsInfoState.map((event, index) => {
        return (
          <>
            {!editState[index] ? (
              <ViewEventCard event={event} index={index} />
            ) : (
              <EditEventCard event={event} index={index} />
            )}
          </>
        );
      })}
    </div>
  );
};
export default ViewAllEventCards;
