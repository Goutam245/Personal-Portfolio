'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Engineering Excellence',
      icon: 'ri-code-line',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'React 18+ & Next.js 14+', level: 95 },
        { name: 'Redux Toolkit & State Management', level: 90 },
        { name: 'Tailwind CSS & Styled Components', level: 92 },
        { name: 'Performance Optimization', level: 88 }
      ]
    },
    {
      title: 'Full-Stack Capabilities',
      icon: 'ri-server-line',
      skills: [
        { name: 'Node.js & Express.js', level: 85 },
        { name: 'PostgreSQL & MongoDB', level: 82 },
        { name: 'RESTful APIs & GraphQL', level: 85 },
        { name: 'Python (Data Analysis)', level: 78 },
        { name: 'SQL (Advanced Queries)', level: 80 }
      ]
    },
    {
      title: 'DevOps & Engineering',
      icon: 'ri-tools-line',
      skills: [
        { name: 'Git & CI/CD Pipelines', level: 90 },
        { name: 'Docker & Containerization', level: 85 },
        { name: 'Testing (Jest, Cypress)', level: 88 },
        { name: 'AWS & Cloud Services', level: 82 },
        { name: 'Performance Monitoring', level: 85 }
      ]
    },
    {
      title: 'Technical Writing & Content Strategy',
      icon: 'ri-article-fill',
      skills: [
        { name: 'API Documentation (Swagger/OpenAPI) ', level: 90 },
        { name: 'SEO Content Optimization', level: 85 },
        { name: 'Technical Guides & Documentation', level: 88 },
        { name: 'Content Strategy & Planning', level: 82 },
        { name: 'Performance Analytics (GA4)', level: 85 }
      ]
    },
    {
      title: 'Technical Tools Proficiency',
      icon: 'ri-app-store-line',
      skills: [
        { name: 'Notion & Documentation Systems', level: 90 },
        { name: 'JIRA & Project Management', level: 85 },
        { name: 'Postman & API Testing', level: 88 },
        { name: 'Confluence & Documentation', level: 82 },
        { name: 'MadCap Flare & Documentation', level: 85 }
      ]
    },
    {
      title: 'Leadership & Soft Skills',
      icon: 'ri-team-line',
      skills: [
        { name: 'Technical Mentoring', level: 92 },
        { name: 'Cross-functional Leadership', level: 88 },
        { name: 'Architecture Design', level: 85 },
        { name: 'Code Review & Quality', level: 90 },
        { name: 'Client Communication', level: 96 }
      ]
    }
  ];

  const certifications = [
    {
      name: 'Full-Stack Development (React, Node.js, MongoDB)',
      issuer: 'Programming Hero',
      year: '2025',
      icon: 'ri-award-line'
    },
    {
      name: 'Advanced React & Performance Optimization',
      issuer: 'Google Certification',
      year: '2024',
      icon: 'ri-award-line'
    },
    {
      name: 'UI/UX Design Systems Certification',
      issuer: 'Udemy (Instructor: Matt Diggity)',
      year: '2024',
      icon: 'ri-award-line'
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: 'ri-award-line'
    },
    {
      name: 'Technical Writing Mastery',
      issuer: 'Google Certification',
      year: '2023',
      icon: 'ri-award-line'
    },
    {
      name: 'Advanced SEO Writing',
      issuer: 'Google',
      year: '2022',
      icon: 'ri-award-line'
    },

    {
      name: 'Content Marketing Certified',
      issuer: 'Coursera',
      year: '2022',
      icon: 'ri-award-line'
    },
    {
      name: 'IELTS Academic 7.5',
      issuer: 'British Council',
      year: '2024',
      icon: 'ri-global-line'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Mastery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack architect with hands-on leadership experience building enterprise-scale applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Certifications & Achievements
            </h3>
            <p className="text-gray-600">
              Professional certifications and recognized achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${cert.icon} text-2xl text-blue-600`}></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-600 font-semibold text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Open Source Contributions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">GitHub Contributions</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Open Source Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1.2k+</div>
                <div className="text-blue-100">GitHub Stars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}