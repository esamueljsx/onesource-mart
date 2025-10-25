'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Tag, Clock } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: 'Fresh Produce Sale',
    discount: '30% OFF',
    description: 'All fresh vegetables and fruits',
    image: '/assets/salesfixed.webp',
    expiresIn: '3 days',
    category: 'Produce',
  },
  {
    id: 2,
    title: 'Dairy Bonanza',
    discount: 'Buy 2 Get 1 Free',
    description: 'On all yogurt and cheese products',
    image: '/assets/salesfixed.webp',
    expiresIn: '5 days',
    category: 'Dairy',
  },
  {
    id: 3,
    title: 'Meat & Seafood Special',
    discount: '25% OFF',
    description: 'Premium cuts and fresh seafood',
    image: '/assets/salesfixed.webp',
    expiresIn: '2 days',
    category: 'Meat',
  },
  {
    id: 4,
    title: 'Pantry Essentials',
    discount: 'Up to 40% OFF',
    description: 'Canned goods, pasta, and grains',
    image: '/assets/salesfixed.webp',
    expiresIn: '7 days',
    category: 'Pantry',
  },

];

export default function PromotionsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  const currentPromo = promotions[currentIndex];
  const image = currentPromo.image

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <section className="bg-red-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-balance">
            Current Promotions
          </h1>
          <p className="text-xl text-red-100">
            Discover amazing deals on your favorite products
          </p>
        </div>
      </section>

      {/* Main Carousel Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Container */}
          <div className={`relative h-100 md:h-96 bg-blend-darken bg-fit bg-[#2a262675]`} 
          style={{ backgroundImage: `url(${image})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="text-white">
                <div className="inline-block bg-red-500 px-4 py-2 rounded-full mb-4 animate-bounce cursor-pointer">
                  <p className="text-sm font-bold">{currentPromo.category}</p>
                </div>
                <h2 className="text-4xl font-bold mb-2 text-balance">
                  {currentPromo.title}
                </h2>
                <p className="text-lg text-gray-200 mb-4">
                  {currentPromo.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-red-600 px-2 py-2 rounded-lg">
                    <Tag size={20} />
                    <span className="text-md font-bold animate-pulse cursor-pointer">
                      {currentPromo.discount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-800 px-4 py-2 rounded-lg hover:shadow-lg">
                    <Clock size={20} />
                    <span className="font-semibold cursor-pointer">
                      Expires in {currentPromo.expiresIn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition z-10 promotions-navigate-btn duration-300"
            aria-label="Previous promotion"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition z-10 promotions-navigate-btn duration-300"
            aria-label="Next promotion">
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition ${
                  index === currentIndex
                    ? 'bg-red-500 w-8'
                    : 'bg-white/60 hover:bg-white/80 w-3'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Promotion Details Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            All Active Promotions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                onClick={() => goToSlide(promo.id - 1)}
                className={`cursor-pointer p-6 rounded-lg border-1 transition duration-400 transform hover:scale-105 hover:shadow-md ${
                  currentIndex === promo.id - 1
                    ? 'border-red-600 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-red-400'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {promo.category}
                  </span>
                  <span className="text-red-600 font-bold text-lg">
                    {promo.discount}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {promo.title}
                </h4>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center gap-2 text-red-800 font-semibold">
                  <Clock size={16} />
                  <span>Expires in {promo.expiresIn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-red-500 text-white p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Don't Miss Out!</h3>
          <p className="text-lg text-red-100 mb-6">
            Visit us today to take advantage of these amazing deals
          </p>
          <button className="bg-white text-red-700 hover:bg-red-50 font-bold py-3 px-8 rounded-lg transition hover:shadow-lg cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}