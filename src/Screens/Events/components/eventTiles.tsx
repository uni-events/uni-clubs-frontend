import { useState } from "react";
import { longStr } from "../../../Data/dataTypes";
import SingleEventTile from "./singleEventTile";

const EventTiles = ({
  purpose,
  onChange,
}: {
  purpose: string;
  onChange: Function;
}) => {
  const eventDetails: {
    clubStr: string;
    name: string;
    description: string;
    logo: string;
    banner: string;
    event: string;
    tags: string[];
    categories: string[];
  }[] = [
    {
      clubStr: "catsoc",
      name: "Cat Appreciation Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
      event: "Cat Petting Stall",
      tags: ["free", "no-food"],
      categories: ["Hobby"],
    },

    {
      clubStr: "csesoc",
      name: "CSE Society",
      description: longStr,
      logo: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
      event: "Weekly BBQ",
      tags: ["free", "food"],
      categories: ["Academic/Career"],
    },
    {
      clubStr: "cserevue",
      name: "Computer Science and Engineering Revue",
      description: longStr,
      event: "Standup Session",
      logo: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      banner: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
      tags: ["free", "no-food"],
      categories: ["Hobby"],
    },
    {
      clubStr: "dogsoc",
      name: "Dog Appreciation Society",
      description: longStr,
      event: "Dog Petting Stall",
      logo: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
      tags: ["free", "food"],
      categories: ["Hobby"],
    },
    {
      clubStr: "digisoc",
      name: "Digital Society UNSW",
      description: longStr,
      event: "Digital Something Event",
      logo: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      banner: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
      tags: ["paid", "no-food"],
      categories: ["Academic/Career"],
    },
  ];
  const [eventSelection, setEventSelection] = useState(eventDetails[0]);
  const handleSelection = (event: any) => {
    setEventSelection(event);
    onChange(event);
  };

  return (
    <>
      <div className="w-full pt-4 h-fit">
        {purpose === "EventsOfDay" ? (
          <div className="grid w-full grid-flow-row gap-4 xs:grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3">
            {eventDetails.map((event, index) => (
              <button onClick={() => handleSelection(event)}>
                <SingleEventTile key={index} eventDetails={event} />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-flow-row gap-4 xs:grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3">
            {eventDetails.map((event, index) => (
              <button onClick={() => handleSelection(event)}>
                <SingleEventTile key={index} eventDetails={event} />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default EventTiles;
