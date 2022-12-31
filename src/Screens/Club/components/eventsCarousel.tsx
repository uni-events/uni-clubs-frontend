import React, { useState } from "react";

const EventsCarousel = () => {
  const CarouselData = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const [cState, setCState] = useState(0);
  const [slideState, setSlideState] = useState(0);

  const nextImage = () => {
    if (cState < CarouselData.length - 1) setCState(cState + 1);
  };

  const prevImage = () => {
    if (cState > 0) setCState(cState - 1);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-row">
          <button className="h-full w-fit bg-slate-300" onClick={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
            </svg>
          </button>
          <div className="mt-8">
            <div className="max-w-lg h-72 flex overflow-hidden relative">
              {CarouselData.map((slide, index) => {
                return (
                  <img
                    src={slide.image}
                    alt="This is a carousel slide"
                    key={index}
                    className={
                      index === cState
                        ? "block w-full h-auto object-cover"
                        : "hidden"
                    }
                  />
                );
              })}
            </div>
          </div>
          <button className="h-full w-fit bg-slate-300" onClick={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex h-fit w-full justify-center p-2">
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
    </>
  );
};
export default EventsCarousel;
