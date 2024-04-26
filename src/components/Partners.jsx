import React from "react";
import partners from "../assets/images/partners.png";

const Partners = () => {
  return (
    <div className="flex flex-col justify-center items-center font-display bg-white my-8 py-8">
      <h1 className="text-[20px] font-semibold my-5">
        Our products are also available on{" "}
      </h1>
      <img className="mb-6" src={partners} alt="" />
    </div>
  );
};

export default Partners;
