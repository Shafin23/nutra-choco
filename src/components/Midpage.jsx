import React from 'react'
import backgroundImage from '../assets/images/background.svg'

const Midpage = () => {
   
  return (
      <div className="flex overflow-hidden relative flex-col justify-center  w-full font-bold text-center text-white  min-h-[465px] max-md:max-w-full font-display">
        <img
          loading="lazy"
          src={backgroundImage}
          className="object-cover absolute inset-0 size-full blur-[5px]"
        />
        <div className="flex relative flex-col items-center p-20 min-h-[465px] bg-black bg-opacity-30 max-md:px-5 max-md:max-w-full">
          <div className="mt-16 text-2xl max-md:mt-10 mb-4">
            Savour Wellness in Every Bite
          </div>
          <div className="mb-12 text-5xl w-[715px] max-md:mb-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Where Indulgence Meets Health - Experience the Nutrachoco
          </div>
        </div>
      </div>
    
  );
}

export default Midpage


