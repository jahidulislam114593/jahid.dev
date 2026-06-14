import { useState } from 'react';
import { siteConfig } from '../config';

export default function Thesis() {
  const thesis = siteConfig.thesis;
  const [posterOpen, setPosterOpen] = useState(false);
  if (!thesis) return null;

  return (
    <>
      {/* Poster Lightbox Modal */}
      {posterOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setPosterOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setPosterOpen(false)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              Close
            </button>
            <img
              src="/images/thesis-poster.png"
              alt="CAS-FD Thesis Poster"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <section
        id="thesis"
        className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        style={{ '--accent-color': siteConfig.accentColor }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left side */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: siteConfig.accentColor }}></div>
                  <span className="text-sm font-medium text-gray-600">Academic Research</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">Thesis</h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: siteConfig.accentColor }}></div>
                <p className="text-gray-600 pt-4">
                  My undergraduate thesis research at {thesis.institution}, exploring fine-grained video recognition in broadcast football footage.
                </p>
              </div>
            </div>

            {/* Right side - Thesis card */}
            <div className="lg:col-span-8">
              <div className="relative bg-white rounded-2xl border-2 border-gray-100 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group overflow-hidden">

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: siteConfig.accentColor }}></div>

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: siteConfig.accentColor }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                        </svg>
                        B.Sc. Thesis
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">{thesis.year}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">{thesis.title}</h3>
                  </div>

                  {/* View Poster button */}
                  <button
                    onClick={() => setPosterOpen(true)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-300 text-xs font-medium border border-gray-200 hover:border-gray-900"
                    title="View Research Poster"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    View Poster
                  </button>
                </div>

                {/* Poster thumbnail */}
                <div
                  className="mb-8 rounded-xl overflow-hidden border border-gray-100 cursor-pointer group/poster relative"
                  onClick={() => setPosterOpen(true)}
                >
                  <img
                    src="/images/thesis-poster.png"
                    alt="Thesis Poster Preview"
                    className="w-full object-cover max-h-48 object-top transition-transform duration-300 group-hover/poster:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/poster:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                      </svg>
                      View Full Poster
                    </span>
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Abstract</h4>
                  <p className="text-gray-600 leading-relaxed text-base">{thesis.abstract}</p>
                </div>

                {/* Key Results */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Key Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {thesis.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: `${siteConfig.accentColor}18` }}>
                          <svg className="w-3 h-3" style={{ color: siteConfig.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 font-medium leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {thesis.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Hover left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: siteConfig.accentColor }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}