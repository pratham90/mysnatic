'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface LogoCarouselProps {
  logos: Array<{
    src: string;
    alt: string;
    name?: string;
  }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  itemsPerView?: number;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({
  logos,
  autoPlay = false,
  autoPlayInterval = 3000,
  itemsPerView = 5,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
 // The index in the extended array
  const [slideIndex, setSlideIndex] = useState(itemsPerView);
  const showArrows = logos.length > itemsPerView;

  useEffect(() => {
    if (autoPlay && showArrows && !isHovered) {
      const interval = setInterval(() => {
        setSlideIndex((prev) => prev + 1);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, showArrows, isHovered]);

  // For sliding effect, duplicate logos at start and end for seamless infinite loop
  const total = logos.length;
  const extendedLogos = [
    ...logos.slice(total - itemsPerView, total),
    ...logos,
    ...logos.slice(0, itemsPerView),
  ];
 

  // When currentIndex changes (from arrows/autoplay), animate slide
  useEffect(() => {
    if (!containerRef.current) return;
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      // Handle infinite loop jump (no animation)
      if (slideIndex <= 0) {
        setSlideIndex(total);
      } else if (slideIndex >= total + itemsPerView) {
        setSlideIndex(itemsPerView);
      }
    }, 400); // match transition duration
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [slideIndex, total, itemsPerView]);
  const handlePrevious = () => {
    if (isAnimating) return;
    setSlideIndex((prev) => prev - 1);
  }
  const handleNext = () => {
    if (isAnimating) return;
    setSlideIndex((prev) => prev + 1);
  }

  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full bg-white py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          {showArrows && (
            <button
              onClick={handlePrevious}
              type="button"
              className="shrink-0 bg-white hover:bg-gray-100 text-black p-2 md:p-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2  z-10 cursor-pointer"
              aria-label="Previous logos"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Logos Container */}
          <div className="flex-1 flex items-center justify-center  overflow-hidden">
            <div
              ref={containerRef}
              className="flex items-center justify-center  w-full"
              style={{
                width: `calc(${extendedLogos.length} * (100% / ${itemsPerView}))`,
                transform: `translateX(-${(slideIndex * 100) / extendedLogos.length}%)`,
                transition: isAnimating ? 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' : 'none',
              }}
            >
              {extendedLogos.map((logo, index) => (
                <div
                  key={`${index}-${logo.src}`}
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: `calc(100% / ${itemsPerView})`,
                    minWidth: '120px',
                  }}
                >
                  <div className="relative w-full h-24 md:h-32 lg:h-40 flex items-center justify-center  hover:scale-105 transition-transform duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px, 200px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {showArrows && (
            <button
              onClick={handleNext}
              type="button"
              className="shrink-0 bg-white hover:bg-gray-100 text-black p-2 md:p-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2  z-10 cursor-pointer"
              aria-label="Next logos"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Progress Indicator
        {showArrows && (
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: Math.ceil(logos.length / itemsPerView) }).map(
              (_, index) => {
                const startIndex = index * itemsPerView;
                const isActive =
                  ((slideIndex - itemsPerView + logos.length) % logos.length) >= startIndex &&
                  ((slideIndex - itemsPerView + logos.length) % logos.length) < startIndex + itemsPerView;
                return (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isActive ? 'w-6 bg-gray-800' : 'w-1 bg-gray-300'
                    }`}
                  />
                );
              }
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default LogoCarousel;
