import React from 'react'
import wishlistIcon from '../assets/icons/whishlist.svg'
import viewIcon from '../assets/icons/view.svg'
const ChocolateCard = ({chocolate}) => {
    return (
      <div className="flex flex-col justify-center max-w-[360px] m-8">
        <div className="flex flex-col items-center pb-3.5 w-full bg-white">
          <img
            loading="lazy"
            src={chocolate.image}
            className="self-stretch w-full aspect-[1.3]"
          />
          <div className='flex flex-col justify-center items-center'>
            <div className="mt-3 text-[24px] font-bold text-center leading-[49.92px] text-yellow-950">
              {chocolate.name}
            </div>
            <div className="flex gap-1.5 text-xl text-[#A6896C] font-bold text-center uppercase ">
              <div>₹{chocolate.price}</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-7 w-full">
            <div className="flex gap-2.5 pl-4 my-auto">
              <img
                loading="lazy"
                src={wishlistIcon}
                className="shrink-0 w-4 aspect-[1.06] fill-yellow-950"
              />
              <img
                loading="lazy"
                src={viewIcon}
                className="shrink-0 w-5 aspect-[1.33]"
              />
            </div>
            <div className="justify-center px-10 py-3.5 text-sm font-bold leading-5 text-center text-white capitalize bg-yellow-950">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChocolateCard


