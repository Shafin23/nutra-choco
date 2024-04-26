import React from "react";
import colonIcon from "../assets/icons/colon.svg";

const TransformCard = ({ story }) => {
  return (
    <div className="flex flex-col m-10 h-[550px] w-[375px] font-display ">
      <div className="flex flex-col pt-12 font-semibold text-center text-black min-w-[375px] relative h-full">
        <div className="flex flex-col px-16 pb-16 mt-12 w-full bg-white shadow-2xl h-full no-scrollbar">
          <div className="flex flex-col items-center justify-center">
            <img
              loading="lazy"
              src={story.image}
              className="z-10 self-center mt-0 max-w-full rounded-full border-4 absolute top-7 border-solid aspect-square border-neutral-200 w-[150px]"
            />
            <img src={colonIcon} alt="" className="size-6 absolute bottom-80" />
          </div>
          <div className="mt-40 text-[14px] text-wrap ">
            {" "}
            {story.review}
          </div>
          <div className="mt-6 text-3xl text-yellow-950">{story.name}</div>{" "}
          <div className="mt-1 text-xl">{story.place}</div> {/* Added margin */}
        </div>
      </div>
    </div>
  );
};

export default TransformCard;
