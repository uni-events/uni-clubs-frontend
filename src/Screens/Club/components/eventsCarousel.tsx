import React, { useState } from "react";
import { EventsCardData } from "../../../Data/dataTypes";

const EventsCarousel = () => {
  const CarouselData: EventsCardData[] = [
    {
      name: "Weekly Meetup 1",
      date: "Wed 28th December",
      image:
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      name: "Weekly Meetup 2",
      date: "Wed 28th December",
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      name: "Weekly Meetup 3",
      date: "Wed 28th December",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Weekly Meetup 4",
      date: "Wed 28th December",
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      name: "Weekly Meetup 5",
      date: "Wed 28th December",
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const [cState, setCState] = useState(0);

  const nextImage = () => {
    if (cState < CarouselData.length - 1) setCState(cState + 1);
  };

  const prevImage = () => {
    if (cState > 0) setCState(cState - 1);
  };

  return (
    <>
      <div className="w-full h-fit">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG mt-8">
          Upcoming Events
        </h1>
        <div className="w-full h-fit mt-4">
          <div className="flex flex-row space-x-4 w-full ">
            <div className="flex flex-col justify-center">
              <button
                className="w-fit rounded-full h-fit bg-Green p-1"
                onClick={prevImage}
              >
                <svg
                  className="fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
                </svg>
              </button>
            </div>

            <div className="w-full h-96 flex overflow-hidden relative">
              {CarouselData.map((slide, index) => {
                return (
                  <>
                    <div className="flex flex-col">
                      <img
                        src={slide.image}
                        alt="This is a carousel slide"
                        key={index}
                        className={
                          index === cState
                            ? "block w-full h-full object-cover bg-center rounded-xl"
                            : "hidden"
                        }
                      />
                      <div
                        key={index}
                        className={
                          index === cState
                            ? "block w-fit h-fit rounded-xl p-4 text-black bg-WhiteBG dark:bg-BlueBlack dark:text-WhiteBG -translate-y-24 translate-x-4 drop-shadow-lg"
                            : "hidden"
                        }
                      >
                        <h1 className="text-xl font-bold">{slide.name}</h1>
                        <p className="text-base font-light">{slide.date}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-col justify-center">
              <button
                className="h-fit rounded-full w-fit bg-Green p-1"
                onClick={nextImage}
              >
                <svg
                  className="fill-WhiteBG"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-fit w-full justify-center px-2 pb-2 pt-4">
          {CarouselData.map((element, index) => {
            return (
              <div
                className={
                  index === cState
                    ? "h-3 w-3 bg-Green rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-3 w-3 bg-Blue rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCState(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default EventsCarousel;
