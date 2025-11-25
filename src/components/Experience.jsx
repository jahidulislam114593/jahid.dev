import { siteConfig } from '../config';

export default function Experience() {
  const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;

  if (!hasExperience) return null;

  return (
    <section 
      id="experience" 
      className="relative py-20 md:py-32 bg-white overflow-hidden"
      style={{ '--accent-color': siteConfig.accentColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left side - Section heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: siteConfig.accentColor }}
                ></div>
                <span className="text-sm font-medium text-gray-600">Career journey</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Work Experience
              </h2>
              
              <div 
                className="w-20 h-1.5 rounded-full"
                style={{ backgroundColor: siteConfig.accentColor }}
              ></div>

              <p className="text-gray-600 pt-4">
                My professional journey and the roles that shaped my expertise in software engineering.
              </p>
            </div>
          </div>

          {/* Right side - Experience timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

              <div className="space-y-12">
                {siteConfig.experience.map((exp, index) => (
                  <div 
                    key={`${exp.company}-${exp.title}`} 
                    className="relative group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-8 -translate-x-1/2 z-10">
                      <div className="relative">
                        <div 
                          className="w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-125"
                          style={{ backgroundColor: siteConfig.accentColor }}
                        ></div>
                        {/* Pulse effect */}
                        <div 
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-ping"
                          style={{ backgroundColor: `${siteConfig.accentColor}40` }}
                        ></div>
                      </div>
                    </div>

                    {/* Experience card */}
                    <div className="ml-16 bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-xl group-hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {exp.title}
                          </h3>
                          <p 
                            className="text-lg font-semibold flex items-center gap-2"
                            style={{ color: siteConfig.accentColor }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-600">
                            {exp.dateRange}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 group/item">
                            <div 
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-150"
                              style={{ backgroundColor: siteConfig.accentColor }}
                            ></div>
                            <span className="text-base text-gray-600 leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}