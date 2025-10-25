// src/Components/ImageCarousel.tsx

import React, { useState, useEffect, useRef } from 'react';

export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  className?: string;
  transitionDuration?: number;
  zoomEffect?: boolean;
  imageFit?: 'cover' | 'contain';
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
  showIndicators = true,
  className = '',
  transitionDuration = 500,
  zoomEffect = true,
  imageFit = 'cover',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<number>(0);
  const zoomIntervalRef = useRef<number>(0);

  // Auto-play and Zoom functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const startAutoPlay = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Use a single interval for both zoom and transition timing
    // The visual zoom effect is handled via CSS animation
    autoPlayRef.current = window.setInterval(startAutoPlay, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (zoomIntervalRef.current) clearInterval(zoomIntervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const getImageFitClass = () => imageFit === 'cover' ? 'object-cover' : 'object-contain';

  if (!images || images.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full mx-auto ${className}`} aria-label="Image carousel">
      <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video md:aspect-[3/2]">
        {/* Carousel Slides (Fade Transition for simplicity) */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity ease-in-out flex items-center justify-center`}
            style={{ 
                opacity: index === currentIndex ? 1 : 0,
                transitionDuration: `${transitionDuration}ms`,
            }}
          >
            <div 
              // Tailwind class for zoom effect on active slide
              className={`w-full h-full transition-transform ${zoomEffect && index === currentIndex ? 'scale-105' : 'scale-100'}`}
              style={{ transitionDuration: `${autoPlayInterval}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full ${getImageFitClass()}`}
              />
            </div>
            
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-16 text-left">
                <p className="text-xl md:text-3xl font-semibold">{image.caption}</p>
              </div>
            )}
          </div>
        ))}

        {/* Indicators */}
        {showIndicators && images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                  index === currentIndex 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-white/70 hover:bg-white'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;