import React from 'react'
import carosal1 from '../assets/images/carosal1.png'
import carosal2 from '../assets/images/carosal2.png'
import carosal3 from '../assets/images/carosal3.png'
import carosal4 from '../assets/images/carosal4.png'
import { RxDotFilled } from 'react-icons/rx'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from 'react'


const Carosal = () => {
  

  const slides = [
    {
      uri: carosal1,
    },
    {
      uri: carosal2,
    },
    {
      uri: carosal3,
    },
    {
      uri: carosal4,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setActiveSlideIndex(slideIndex)
  };
  const isActiveSlide = (slideIndex) => {
    return slideIndex === activeSlideIndex;
  };


  
  return (
    <div className="w-screen h-[950px]  m-auto my-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].uri})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex absolute left-0 right-0 bottom-0 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-6xl ${
              isActiveSlide(slideIndex) ? "text-[#A6896C]" : "text-[#FFFFFF]"
            }  cursor-pointer`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carosal