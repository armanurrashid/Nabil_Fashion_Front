import React, { useState } from "react";
import LeftArrow from "svgs/leftArrow";
import RightArrow from "svgs/rightArrow";
import sharee1 from "images/s1.jpg";
import sharee3 from "images/s3.jpg";
import sharee2 from "images/s2.jpg";
import sharee4 from "images/s4.jpg";
import sharee5 from "images/s5.jpg";
// Sample JSON image data
const images = [
  { id: 1, url: sharee1 },
  { id: 2, url:  sharee2 },
  { id: 3, url:  sharee3 },
  { id: 4, url:  sharee4 },
  { id: 5, url:  sharee5 },
];
const MostPopular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 100 / images.length; 
  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < images.length - 3) setCurrentIndex(currentIndex + 1);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  return (
    <div className="w-full flex justify-center items-center py-6 px-2">
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Chevron Left */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition"
        >
          <LeftArrow />
        </button>

        {/* Slider Track */}
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(images.length * 100) / 3}%`,
            transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((img, index) => {
            const isMiddle = index === currentIndex + 1;
            return (
              <div
                key={img.id}
                className={`px-1 sm:px-2 transition-all duration-300 ${
                  isMiddle ? "scale-105" : "scale-95"
                }`}
                style={{ width: `${slideWidth}%` }}
              >
                <div
                  className={`overflow-hidden rounded-lg shadow-md h-48 sm:h-64 md:h-72 lg:h-80 w-full`}
                >
                  <img
                    src={img.url}
                    alt={`Slide ${img.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Chevron Right */}
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default MostPopular;