import { siteConfig } from '../config';

export default function Education() {
  const hasEducation = siteConfig.education && siteConfig.education.length > 0;

  if (!hasEducation) return null;

  return (
    <section 
      id="education" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      style={{ '--accent-color': siteConfig.accentColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left side - Section heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: siteConfig.accentColor }}
                ></div>
                <span className="text-sm font-medium text-gray-600">Academic background</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Education
              </h2>
              
              <div 
                className="w-20 h-1.5 rounded-full"
                style={{ backgroundColor: siteConfig.accentColor }}
              ></div>

              <p className="text-gray-600 pt-4">
                My academic journey and achievements that built the foundation of my technical expertise.
              </p>
            </div>
          </div>

          {/* Right side - Education cards */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {siteConfig.education.map((edu, index) => (
                <div
                  key={`${edu.school}-${edu.degree}`}
                  className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${siteConfig.accentColor}10 50%)`,
                      borderTopRightRadius: '1rem'
                    }}
                  ></div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="space-y-3">
                      {/* Degree */}
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors pr-8">
                        {edu.degree}
                      </h3>
                      
                      {/* School with icon */}
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${siteConfig.accentColor}15` }}
                        >
                          <svg 
                            className="w-5 h-5"
                            style={{ color: siteConfig.accentColor }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        </div>
                        <p 
                          className="text-lg font-semibold"
                          style={{ color: siteConfig.accentColor }}
                        >
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Date badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 whitespace-nowrap">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-600">
                        {edu.dateRange}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <svg 
                          className="w-5 h-5"
                          style={{ color: siteConfig.accentColor }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Achievements & Highlights
                        </h4>
                      </div>

                      <ul className="space-y-3 pl-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 group/item">
                            <div 
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-150"
                              style={{ backgroundColor: siteConfig.accentColor }}
                            ></div>
                            <span className="text-base text-gray-600 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: siteConfig.accentColor }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}