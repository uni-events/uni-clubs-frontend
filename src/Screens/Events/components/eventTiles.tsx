import { useState } from "react";
import { longStr } from "../../../Data/dataTypes";
import SingleEventTile from "./singleEventTile";

const EventTiles = ({
  purpose,
  onChange,
  eventData,
}: {
  purpose: string;
  onChange: Function;
  eventData: {
    clubStr: string;
    name: string;
    description: string;
    logo: string;
    banner: string;
    event: string;
    tags: string[];
    categories: string[];
  }[];
}) => {
  const [eventSelection, setEventSelection] = useState(eventData[0]);
  const handleSelection = (event: any) => {
    setEventSelection(event);
    onChange(event);
  };

  return (
    <>
      <div className="w-full pt-4 h-fit">
        {purpose === "EventsOfDay" ? (
          <div className="grid w-full grid-flow-row gap-4 xs:grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3">
            {eventData.map((event, index) => (
              <button key={index} onClick={() => handleSelection(event)}>
                <SingleEventTile eventDetails={event} />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-flow-row gap-4 xs:grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3">
            {eventData.map((event, index) => (
              <button key={index} onClick={() => handleSelection(event)}>
                <SingleEventTile eventDetails={event} />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default EventTiles;
