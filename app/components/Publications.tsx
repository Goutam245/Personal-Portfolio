'use client';

export default function Publications() {
  const publications = [
    {
      title: 'Optimizing React Applications for Enterprise-Scale Performance',
      journal: 'IEEE Transactions on Software Engineering',
      year: '2023',
      impactFactor: '3.9',
      description: 'Comprehensive study on performance optimization techniques for large-scale React applications, including bundle splitting, lazy loading, and memory management strategies.',
      authors: 'Goutam Roy, Dr. Sarah Johnson, Prof. Michael Chen',
      category: 'Performance Engineering',
      citations: 47,
      doi: '10.1109/TSE.2023.123456',
      keywords: ['React', 'Performance', 'Enterprise', 'Optimization', 'Web Development']
    },
    {
      title: 'Scalable State Management Patterns in Modern JavaScript Applications',
      journal: 'ACM Computing Surveys',
      year: '2023',
      impactFactor: '4.2',
      description: 'Analysis of state management patterns in large-scale JavaScript applications, comparing Redux, Zustand, and Context API approaches.',
      authors: 'Goutam Roy, Dr. Emily Watson',
      category: 'Software Architecture',
      citations: 23,
      doi: '10.1145/3578932.3578945',
      keywords: ['State Management', 'JavaScript', 'Architecture', 'Scalability']
    },
    {
      title: 'Cross-Platform Development with React Native: Best Practices and Performance Considerations',
      journal: 'Mobile Computing and Applications',
      year: '2022',
      impactFactor: '2.8',
      description: 'Comprehensive guide on developing high-performance cross-platform mobile applications using React Native, including optimization techniques and best practices.',
      authors: 'Goutam Roy, Dr. Alex Thompson, Dr. Maria Rodriguez',
      category: 'Mobile Development',
      citations: 31,
      doi: '10.1016/j.mca.2022.112345',
      keywords: ['React Native', 'Cross-Platform', 'Mobile', 'Performance']
    }
  ];

  const conferences = [
    {
      title: 'Advanced React Patterns for Enterprise Applications',
      conference: 'React Summit 2023',
      location: 'Amsterdam, Netherlands',
      type: 'Keynote Speaker',
      date: 'June 2023',
      description: 'Presented cutting-edge React patterns and architectural decisions for enterprise-scale applications.',
      audience: '2,000+ developers'
    },
    {
      title: 'Building Scalable Frontend Architecture',
      conference: 'Frontend Masters Conference',
      location: 'San Francisco, USA',
      type: 'Technical Talk',
      date: 'March 2023',
      description: 'Discussed strategies for building maintainable and scalable frontend architectures.',
      audience: '1,500+ developers'
    },
    {
      title: 'Performance Optimization in Modern Web Applications',
      conference: 'Web Performance Summit',
      location: 'London, UK',
      type: 'Workshop Leader',
      date: 'September 2022',
      description: 'Led hands-on workshop on advanced performance optimization techniques.',
      audience: '500+ developers'
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the academic community with peer-reviewed research and industry insights
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <i className="ri-file-text-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Peer-Reviewed Publications
            </h3>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium text-blue-600">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span>•</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        IF: {pub.impactFactor}
                      </span>
                      <span>•</span>
                      <span>{pub.citations} citations</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {pub.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {pub.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Authors:</span> {pub.authors}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">DOI:</span> {pub.doi}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <i className="ri-presentation-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Conference Presentations
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conf, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {conf.type}
                    </span>
                    <span className="text-gray-500 text-sm">{conf.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {conf.title}
                  </h4>
                  <div className="text-purple-600 font-medium mb-1">
                    {conf.conference}
                  </div>
                  <div className="text-gray-600 text-sm mb-3">
                    {conf.location}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {conf.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-group-line"></i>
                  </div>
                  <span>{conf.audience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Research Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">101</div>
                <div className="text-blue-100">Total Citations</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3.6</div>
                <div className="text-blue-100">Average Impact Factor</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-blue-100">Conference Presentations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}