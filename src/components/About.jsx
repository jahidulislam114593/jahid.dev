import { siteConfig } from '../config';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 bg-white overflow-hidden"
      style={{ '--accent-color': siteConfig.accentColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
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
                <span className="text-sm font-medium text-gray-600">Get to know me</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                About Me
              </h2>
              
              <div 
                className="w-20 h-1.5 rounded-full"
                style={{ backgroundColor: siteConfig.accentColor }}
              ></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* About text */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 font-light">
                {siteConfig.aboutMe}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${siteConfig.accentColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: siteConfig.accentColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Clean Code</h3>
                  <p className="text-sm text-gray-600">Writing maintainable and scalable solutions</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${siteConfig.accentColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: siteConfig.accentColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Performance</h3>
                  <p className="text-sm text-gray-600">Optimized for speed and efficiency</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-6 border border-pink-200/50">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${siteConfig.accentColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: siteConfig.accentColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Problem Solver</h3>
                  <p className="text-sm text-gray-600">Creative solutions to complex challenges</p>
                </div>
              </div>
            </div>

            {/* Skills section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {siteConfig.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group relative"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span
                      className="relative block px-5 py-2.5 bg-white text-gray-800 rounded-xl text-sm sm:text-base font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats or additional info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: siteConfig.accentColor }}
                >
                  {siteConfig.projects?.length || 7}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: siteConfig.accentColor }}
                >
                  {siteConfig.skills?.length || 8}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Technologies</div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: siteConfig.accentColor }}
                >
                  {siteConfig.experience?.length || 1}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: siteConfig.accentColor }}
                >
                  {siteConfig.activities?.length || 48}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Volunteer Activities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}