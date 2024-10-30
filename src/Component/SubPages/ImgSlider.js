import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ImgSlider() {
  const slides = [
    {
      url: "mainbanner/06.webp", // Update the URL with the correct path
    },
    {
      url: "mainbanner/07.webp", // Update the URL with the correct path
    },
    {
      url: "mainbanner/08.webp", // Update the URL with the correct path
    },
    {
      url: "mainbanner/09.webp", // Update the URL with the correct path
    },
    {
      url: "mainbanner/010.webp", // Update the URL with the correct path
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  useEffect(() => {
    // Auto-play the slider
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change this number to adjust the interval time in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  return (
    <div className="max-w-[1400px] sm:h-[600px] w-full m-auto py-16 px-4 relative group bg-center bg-cover duration-500  object-center">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full sm:h-full h-[140px] rounded-2xl bg-center bg-cover duration-500  object-center"
        data-aos="zoom-in"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgSlider;
