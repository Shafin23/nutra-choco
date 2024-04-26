import React from 'react'
import chocolateMan from "../assets/images/chocolateman.png";
import Human from "../assets/images/human.png";


const AboutMidpage = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center  w-full font-bold text-center text-white  h-[670px] max-md:max-w-full font-display">
      <img
        loading="lazy"
        src={chocolateMan}
        className="object-cover absolute inset-0 size-full -z-10"
      />
      <div className="flex flex-col justify-center bg-black bg-opacity-80">
        <div className="overflow-hidden px-20 pt-12 pb-2.5 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-bold text-white capitalize max-md:mt-10 max-md:max-w-full">
                <div className=" text-left text-7xl max-md:max-w-full max-md:text-4xl text-wrap">
                  Crafted from Nature, For Your Well-being
                </div>
                <div className="flex flex-col ">
                  <div className="mt-28 text-3xl leading-10 text-left max-md:mt-10 max-md:max-w-full">
                    Discover the Purity and Power of Organic Ingredients in
                    Every
                  </div>
                  <div className="mt-7 text-base text-[18px] font-normal w-3/4 max-md:max-w-full text-left">
                    In the heart of metropolitan India, a revolution blossoms;
                    where tradition meets innovation, and wellness is woven into
                    every bite. Welcome to Nutrachoco, where we redefine
                    indulgence with a touch of nature’s best gifts.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={Human}
                className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMidpage

