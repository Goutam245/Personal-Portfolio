'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Engineer',
      company: 'Tech Solutions Ltd',
      location: 'Dhaka, Bangladesh',
      duration: 'Dec 2024 - Jun 2025',
      description: 'Lead frontend architect for enterprise applications serving 1000+ users. Achieved 30% performance optimization and mentored 12 junior developers.',
      achievements: [
        'Engineered 8+ scalable, responsive enterprise web applications using React.js, Next.js, and TypeScript',
        'Documented 20+ RESTful APIs using Swagger/OpenAPI, reducing developer onboarding time by 35%.',
        'Optimized application startup time by 40%, improving Lighthouse performance and overall user experience'
      ],
      tech: ['React 18', 'Next.js 14', 'TypeScript', 'GraphQL', 'AWS']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Brain Station 23',
      location: 'Dhaka, Bangladesh',
      duration: 'May 2024 - Nov 2024',
      description: 'Developed responsive web applications and contributed to open-source projects. Maintained 96% client satisfaction across multiple projects.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Integrated payment systems processing $100K+ monthly',
        'Optimized SEO resulting in 200% organic traffic increase',
        'Collaborated with international clients across 5 countries'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'CI/CD']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'StartupHub',
      location: 'Dhaka, Bangladesh',
      duration: 'Jan 2024 - Mar 2024',
      description: 'Gained hands-on experience in full-stack development and contributed to multiple client projects under senior mentorship.',
      achievements: [
        'Developed MVP for 3 startup clients',
        'Learned modern development practices and methodologies',
        'Contributed to team knowledge sharing sessions',
        'Received outstanding performance recognition'
      ],
      tech: ['JavaScript', 'React', 'Express.js', 'MongoDB', 'Git']
    },
    {
      title: 'UI/UX Design Intern',
      company: 'CreativeCode Studio',
      location: 'Dhaka, Bangladesh',
      duration: 'May 2023 - July 2023',
      description: 'Delivered UI/UX solutions for multiple client projects while developing core design expertise under senior guidance',
      achievements: [
        'Designed and prototyped web-ready UI assets in Figma for cross-platform applications.',
        'Aligned brand visuals and components with developer handoff standards, improving team workflow by 15%.',
      ],
      tech: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems', 'Responsive Design']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building enterprise-scale applications and leading high-performance teams
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <span className="text-blue-600 font-semibold">{exp.company}</span>
                      <span className="hidden md:block text-gray-400">•</span>
                      <span className="text-gray-600">{exp.location}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{exp.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-4 h-4 flex items-center justify-center mt-1 mr-2">
                            <i className="ri-check-line text-green-600 text-sm"></i>
                          </div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}