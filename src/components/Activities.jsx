import { useState } from 'react';
import { siteConfig } from '../config';

export default function Activity() {
  const hasActivities = siteConfig.activities && siteConfig.activities.length > 0;
  const [selectedImage, setSelectedImage] = useState(null);

  if (!hasActivities) return null;

  const openLightbox = (activity) => {
    setSelectedImage(activity);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = siteConfig.activities.findIndex(a => a.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % siteConfig.activities.length
      : (currentIndex - 1 + siteConfig.activities.length) % siteConfig.activities.length;
    setSelectedImage(siteConfig.activities[newIndex]);
  };

  return (
    <>
      <section
        id="activity"
        className="relative py-20 md:py-32 bg-white overflow-hidden"
        style={{ '--accent-color': siteConfig.accentColor }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: siteConfig.accentColor }}
                ></div>
                <span className="text-sm font-medium text-gray-600">Community service</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Volunteer <span style={{ color: siteConfig.accentColor }}>Memories</span>
              </h2>
              
              <div 
                className="w-20 h-1.5 rounded-full"
                style={{ backgroundColor: siteConfig.accentColor }}
              ></div>

              <p className="text-lg text-gray-600 leading-relaxed pt-2">
                A visual journey through my volunteer work and community service. Each photo captures moments of giving back, from education initiatives to social welfare programs.
              </p>
            </div>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {siteConfig.activities.map((activity, index) => (
              <div
                key={activity.id}
                className="break-inside-avoid group cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(activity)}
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-50 transition-all duration-500 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Image */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                    {/* Category badge */}
                    <span
                      className="inline-block self-start px-3 py-1 text-xs font-semibold text-white rounded-lg mb-2 backdrop-blur-sm"
                      style={{ backgroundColor: `${siteConfig.accentColor}dd` }}
                    >
                      {activity.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {activity.title}
                    </h3>
                    
                    {/* Date */}
                    <p className="text-gray-200 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {activity.date}
                    </p>

                    {/* View indicator */}
                    <div className="mt-3 text-white/80 text-xs font-medium flex items-center gap-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span>Click to view</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Zoom icon indicator */}
                  <div className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3">
              <div 
                className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"
                style={{ 
                  backgroundImage: `linear-gradient(to right, transparent, ${siteConfig.accentColor}40)` 
                }}
              ></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <svg 
                  className="w-4 h-4"
                  style={{ color: siteConfig.accentColor }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-600">
                  {siteConfig.activities.length} moments captured
                </span>
              </div>
              <div 
                className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"
                style={{ 
                  backgroundImage: `linear-gradient(to left, transparent, ${siteConfig.accentColor}40)` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 z-10 group"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-white transition-transform group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 z-10 hover:scale-110"
            aria-label="Previous"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 z-10 hover:scale-110"
            aria-label="Next"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain bg-gray-100"
              />

              {/* Image info overlay */}
              <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className="inline-block px-4 py-1.5 text-sm font-semibold text-white rounded-lg backdrop-blur-sm"
                    style={{ backgroundColor: `${siteConfig.accentColor}dd` }}
                  >
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-white font-medium">{selectedImage.date}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                  {selectedImage.title}
                </h3>
                
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-4xl">
                  {selectedImage.description}
                </p>
              </div>
            </div>

            {/* Image counter */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
              {siteConfig.activities.findIndex(a => a.id === selectedImage.id) + 1} / {siteConfig.activities.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Smooth transitions */
        .group {
          will-change: transform;
        }

        .group img {
          will-change: transform;
        }
      `}</style>
    </>
  );
}