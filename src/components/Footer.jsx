import { siteConfig } from '../config';

export default function Footer() {
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
  const hasEducation = siteConfig.education && siteConfig.education.length > 0;
  const hasActivities = siteConfig.activities && siteConfig.activities.length > 0;

  return (
    <footer 
      className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 overflow-hidden"
      style={{ '--accent-color': siteConfig.accentColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Brand & Social */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">
                {siteConfig.name}
              </h3>
              <p className="text-lg text-gray-600 font-medium">
                {siteConfig.title}
              </p>
              <p className="text-base text-gray-500 leading-relaxed max-w-md">
                Building innovative solutions and contributing to community welfare through technology and volunteer work.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={`mailto:${siteConfig.social.email}`}
                aria-label="Email"
                className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="h-5 w-5 transition-colors group-hover:text-[var(--accent-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="h-5 w-5 transition-colors group-hover:text-[var(--accent-color)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:scale-110 group"
                >
                  <svg
                    className="h-5 w-5 transition-colors group-hover:text-[var(--accent-color)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
              )}
              
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="h-5 w-5 transition-colors group-hover:text-[var(--accent-color)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                      About
                    </a>
                  </li>
                  {hasProjects && (
                    <li>
                      <a
                        href="#projects"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                        Projects
                      </a>
                    </li>
                  )}
                  {hasExperience && (
                    <li>
                      <a
                        href="#experience"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                        Experience
                      </a>
                    </li>
                  )}
                  {hasEducation && (
                    <li>
                      <a
                        href="#education"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                        Education
                      </a>
                    </li>
                  )}
                  {hasActivities && (
                    <li>
                      <a
                        href="#activity"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                        Activities
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={siteConfig.resume}
                      download
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Get in Touch
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[var(--accent-color)] transition-colors"></span>
                      Email Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Built with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>and React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}