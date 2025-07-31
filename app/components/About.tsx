'use client';

export default function About() {
  const highlights = [
    {
      icon: 'ri-trophy-line',
      title: '30% Performance Boost',
      description: 'Optimized applications serving 10,000+ users'
    },
    {
      icon: 'ri-file-text-line',
      title: 'IEEE Publication',
      description: 'Research paper with Impact Factor 3.9'
    },
    {
      icon: 'ri-team-line',
      title: '19+ Developers Mentored',
      description: 'Technical leadership and team growth'
    },
    {
      icon: 'ri-star-line',
      title: '96% Client Satisfaction',
      description: 'Across international projects'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'City University Bangladesh',
      duration: '2025-2028',
      focus: 'AI, Machine Learning, Data Structures, Software Development',
      status: 'In Progress'
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Tangail Polytechnic Institute',
      duration: '2021-2024',
      focus: 'Algorithms, Web Development, Software Architecture',
      status: 'Completed'
    }
  ];

  const certifications = [
    {
      name: 'Frontend Development Mastery',
      issuer: 'Programming Hero',
      year: '2024',
      icon: 'ri-code-line'
    },
    {
      name: 'Advanced React & Performance Optimization',
      issuer: 'Google',
      year: '2023',
      icon: 'ri-google-fill'
    },
    
    {
      name: 'UI/UX Design Systems',
      issuer: 'Udemy',
      year: '2023',
      icon: 'ri-palette-line'
    }
  ];

  const globalReadiness = [
    {
      category: 'Work Authorization',
      items: [
        'H1-B visa sponsorship ready',
        'Canadian PR application eligible',
        'EU Blue Card qualified',
        'Multi-currency payment support'
      ]
    },
    {
      category: 'Relocation Ready',
      items: [
        'USA • Canada • EU • Australia',
        'Immediate availability',
        'International banking setup',
        'Professional network in 15+ countries'
      ]
    },
    {
      category: 'Cultural Adaptability',
      items: [
        'English C1 (IELTS 7.5/9.0)',
        'Multi-timezone experience',
        'Global team collaboration',
        'Cross-cultural communication'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Architecting high-performance solutions for complex enterprise challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://i.ibb.co/jkKSQxGC/photo-2025-01-03-08-32-29.jpg"
              alt="Goutam Roy"
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-[600px]"
            />
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Executive Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Award-winning Frontend Architect with 2+ years building enterprise-scale applications serving 10,000+ users. 
                Proven track record of 30% performance optimization, IEEE research publication (IF: 3.9), and 96% client satisfaction 
                across international projects.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Technical mentor to 19+ developers with 50+ open-source contributions. Ready for Staff Engineer trajectory 
                at top-tier technology companies including Google, Microsoft, Meta, Amazon, and Apple.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">+880 174 759 3452</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-mail-line text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">goutam.roy.421917@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-global-line text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">English C1 (IELTS 7.5) • Bengali Native</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Availability</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">
                  Immediate Start
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">
                  Open to Relocation
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">
                  Visa Sponsorship Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-2xl text-blue-600 dark:text-blue-400`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-graduation-cap-line text-2xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 dark:border-blue-400 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Completed' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-award-line text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-10 h-10 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <i className={`${cert.icon} text-lg text-gray-700 dark:text-gray-300`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                    <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Global Readiness
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to contribute to international teams with proven experience in global collaboration and cultural adaptability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {globalReadiness.map((section, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{section.category}</h4>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}