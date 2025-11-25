import { siteConfig } from '../config';

export default function Projects() {
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;

  if (!hasProjects) return null;

  return (
    <section 
      id="projects" 
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
                <span className="text-sm font-medium text-gray-600">My work</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Featured Projects
              </h2>
              
              <div 
                className="w-20 h-1.5 rounded-full"
                style={{ backgroundColor: siteConfig.accentColor }}
              ></div>

              <p className="text-gray-600 pt-4">
                A collection of projects I've worked on, showcasing my skills in full-stack development, UI/UX design, and problem-solving.
              </p>
            </div>
          </div>

          {/* Right side - Projects list */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {siteConfig.projects.map((project, index) => {
                const Component = project.link ? 'a' : 'div';
                const linkProps = project.link
                  ? {
                      href: project.link,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {};

                return (
                  <div 
                    key={project.name} 
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Component
                      {...linkProps}
                      className={`block relative p-6 sm:p-8 bg-white rounded-2xl border-2 border-gray-100 transition-all duration-300 overflow-visible ${
                        project.link
                          ? 'hover:border-gray-300 hover:shadow-xl hover:-translate-y-2'
                          : ''
                      }`}
                    >
                      {/* Project number badge */}
                      <div className="absolute -left-4 top-8 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg z-10">
                        <span className="text-white font-bold text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* External link icon */}
                      {project.link && (
                        <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="space-y-4 pl-10">
                        {/* Project title */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {project.name}
                          </h3>
                        </div>

                        {/* Project description */}
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed pr-12">
                          {project.description}
                        </p>

                        {/* Tech stack */}
                        {project.skills && project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 group-hover:border-gray-300 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Hover indicator */}
                        {project.link && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: siteConfig.accentColor }}>
                              <span>View Project</span>
                              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Accent line that appears on hover */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{ backgroundColor: siteConfig.accentColor }}
                      ></div>
                    </Component>
                  </div>
                );
              })}
            </div>

            {/* View all projects CTA */}
            <div className="mt-12 text-center">
              <a
                href={siteConfig.social?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View All Projects on GitHub</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}