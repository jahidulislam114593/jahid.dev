import { siteConfig } from '../config';

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
        style={{ '--accent-color': siteConfig.accentColor }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Grid pattern with mask */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full stroke-gray-100 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="grid-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect
              fill="url(#grid-pattern)"
              width="100%"
              height="100%"
              strokeWidth={1}
            ></rect>
          </svg>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 animate-fade-in">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-gray-700">Available for work</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 animate-fade-in animation-delay-100">
                  Hi, I'm{' '}
                  <span 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${siteConfig.accentColor}, ${siteConfig.accentColor}dd)`
                    }}
                  >
                    {siteConfig.name.split(' ')[0]}
                  </span>
                </h1>
                
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 animate-fade-in animation-delay-200">
                  {siteConfig.title}
                </p>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in animation-delay-300">
                  {siteConfig.aboutMe.split('.')[0]}.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800"
                  style={{ 
                    backgroundColor: siteConfig.accentColor,
                  }}
                >
                  <span>View My Work</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                
                <a
                  href={siteConfig.resume}
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-gray-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Resume</span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-4 animate-fade-in animation-delay-500">
                {siteConfig.social?.github && (
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-gray-300"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {siteConfig.social?.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-gray-300"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {siteConfig.social?.email && (
                  <a
                    href={`mailto:${siteConfig.social.email}`}
                    aria-label="Email"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-gray-300"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Right side - Image */}
            {siteConfig.profileImage && (
              <div className="order-1 md:order-2 flex justify-center animate-fade-in animation-delay-200">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Profile image */}
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl rotate-6 animate-float"></div>
                    <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={siteConfig.profileImage}
                        alt={siteConfig.name}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-300">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{siteConfig.projects?.length || 7}+</p>
                        <p className="text-sm text-gray-600">Projects</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-500">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{siteConfig.experience?.length || 1}+</p>
                        <p className="text-sm text-gray-600">Years Exp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="text-sm font-medium">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-20px) rotate(6deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.08);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}