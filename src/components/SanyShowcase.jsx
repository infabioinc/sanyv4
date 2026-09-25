import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SanyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: '/images/showcase-c-1.jpg', alt: 'Inside an Electric Heavy-Duty Truck' },
    { id: 2, src: '/images/showcase-c-2.jpg', alt: 'Energy is Stored' },
    { id: 3, src: '/images/showcase-c-3.jpg', alt: 'Energy Becomes Torque' },
    { id: 4, src: '/images/showcase-c-4.jpg', alt: 'Power is Managed and Recovered' },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-24 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            The Anatomy of Power
          </h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg sm:text-xl font-medium">
            Discover the intelligent energy flow inside the SANY 5565E.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto group">
          {/* Carousel Viewport */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-slate-200 border border-slate-300">
            {images.map((img, index) => (
              <div 
                key={img.id} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-900 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-900 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-2.5 bg-sany-red' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
