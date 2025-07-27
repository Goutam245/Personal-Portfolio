
'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Cryptocurrency Trading Dashboard',
      description: 'Production-ready real-time data visualization platform for crypto trading decisions. Handles 1000+ concurrent users with sub-second data updates.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cryptocurrency%20trading%20dashboard%20interface%20with%20real-time%20charts%20and%20data%20visualization%2C%20dark%20theme%20with%20blue%20and%20green%20accents%2C%20modern%20financial%20trading%20platform%20design%2C%20clean%20UI%20with%20multiple%20chart%20widgets%2C%20professional%20trading%20interface%20with%20candlestick%20charts%20and%20market%20data&width=600&height=400&seq=project-crypto-001&orientation=landscape',
      tech: ['React', 'TypeScript', 'Chart.js', 'WebSocket', 'Real-time Data'],
      features: [
        'Real-time WebSocket connections',
        'Advanced filtering system',
        'Dark/light theme toggle',
        'Responsive design',
        'Sub-second data updates'
      ],
      metrics: {
        users: '1,000+',
        performance: 'Sub-second',
        uptime: '99.9%'
      },
      github: 'https://github.com/goutam-roy',
      demo: 'https://cryptocurrency-dashboard-fawn.vercel.app/',
      status: 'Production-Ready'
    },
    {
      title: 'Real Estate Marketplace Platform',
      description: 'Enterprise-scale property listing platform with advanced search algorithms, geolocation services, and 95+ PageSpeed score optimization.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20real%20estate%20marketplace%20website%20interface%20with%20property%20listings%2C%20search%20filters%2C%20and%20map%20integration%2C%20clean%20professional%20design%20with%20property%20cards%20and%20advanced%20filtering%20options%2C%20contemporary%20real%20estate%20platform%20with%20mobile-first%20responsive%20design&width=600&height=400&seq=project-realestate-001&orientation=landscape',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Geolocation', 'Advanced Routing'],
      features: [
        'Advanced search algorithms',
        'Geolocation integration',
        'SEO optimized architecture',
        'Mobile-first design',
        'Performance optimized'
      ],
      metrics: {
        pagespeed: '95+',
        performance: 'Mobile-first',
        seo: 'Optimized'
      },
      github: 'https://github.com/goutam-roy',
      demo: 'https://real-estate-listing-site.vercel.app/',
      status: 'Enterprise Scale'
    },
    {
      title: 'Professional CV Builder SaaS',
      description: 'SaaS platform serving 10,000+ users with 90+ developers adoption. Reduced manual formatting by 80% with viral adoption in developer communities.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CV%20builder%20application%20interface%20with%20template%20selection%2C%20real-time%20preview%2C%20and%20modern%20design%2C%20clean%20SaaS%20platform%20with%20resume%20templates%20and%20editing%20tools%2C%20contemporary%20document%20builder%20with%20professional%20layouts%20and%20formatting%20options&width=600&height=400&seq=project-cv-001&orientation=landscape',
      tech: ['React', 'PDF Generation', 'LocalStorage', 'Template System', 'Real-time Preview'],
      features: [
        'Multiple template system',
        'Real-time preview',
        'PDF export functionality',
        'Local storage optimization',
        'Viral adoption features'
      ],
      metrics: {
        users: '10,000+',
        developers: '90+',
        efficiency: '80% faster'
      },
      github: 'https://github.com/goutam-roy',
      demo: 'https://professional-cv-builder-six.vercel.app/',
      status: 'SaaS Platform'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured production-ready online store with payment integration, user authentication, and comprehensive order management system.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20product%20listings%2C%20shopping%20cart%2C%20and%20clean%20professional%20design%2C%20online%20store%20with%20product%20grid%2C%20search%20functionality%2C%20and%20contemporary%20UI%20design%2C%20responsive%20e-commerce%20platform%20with%20product%20details%20and%20checkout%20process&width=600&height=400&seq=project-ecommerce-002&orientation=landscape',
      tech: ['Next.js', 'React', 'Payment Integration', 'User Authentication', 'Order Management'],
      features: [
        'Payment gateway integration',
        'User authentication system',
        'Product management',
        'Order tracking',
        'Responsive design'
      ],
      metrics: {
        transactions: 'Integrated',
        users: 'Multi-user',
        features: 'Full-stack'
      },
      github: 'https://github.com/goutam-roy',
      demo: 'https://e-commarce-website.vercel.app/',
      status: 'Production-Ready'
    },
    {
      title: 'AI Agent Interface',
      description: 'Cutting-edge AI interaction interface showcasing latest technology trends with modern UI patterns and seamless AI/ML integration.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20agent%20interface%20with%20chat%20functionality%2C%20sleek%20design%20with%20AI%20assistant%20features%2C%20contemporary%20artificial%20intelligence%20platform%20with%20clean%20UI%2C%20professional%20AI%20interaction%20interface%20with%20modern%20design%20patterns%20and%20user-friendly%20layout&width=600&height=400&seq=project-ai-001&orientation=landscape',
      tech: ['React', 'AI API Integration', 'Modern UI Patterns', 'Machine Learning', 'Real-time Chat'],
      features: [
        'AI API integration',
        'Modern UI patterns',
        'Real-time interactions',
        'Machine learning features',
        'Cutting-edge technology'
      ],
      metrics: {
        technology: 'Latest',
        innovation: 'AI/ML',
        interface: 'Modern'
      },
      github: 'https://github.com/goutam-roy',
      demo: 'https://ai-agent-eta-gilt.vercel.app/',
      status: 'Cutting-Edge'
    },
    {
      title: 'Marketplace Platform (Fiverr-like)',
      description: 'Complex multi-vendor marketplace with sophisticated user flows, service listings, review systems, and comprehensive marketplace dynamics.',
      image: 'https://readdy.ai/api/search-image?query=Multi-vendor%20marketplace%20interface%20similar%20to%20Fiverr%20with%20service%20listings%2C%20user%20profiles%2C%20and%20review%20systems%2C%20professional%20freelance%20marketplace%20with%20clean%20design%2C%20service%20provider%20platform%20with%20modern%20UI%20and%20user%20management%20features&width=600&height=400&seq=project-marketplace-001&orientation=landscape',
      tech: ['React', 'User Management', 'Service Listings', 'Review System', 'Multi-vendor'],
      features: [
        'Multi-vendor architecture',
        'Complex user flows',
        'Service listing system',
        'Review and rating system',
        'User management'
      ],
      metrics: {
        complexity: 'High',
        vendors: 'Multi-vendor',
        architecture: 'Complex'
      },
      github: 'https://github.com/goutam-roy',
      demo: 'https://fiverr-clone-steel.vercel.app/',
      status: 'Complex Architecture'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production-Ready':
        return 'bg-green-100 text-green-800';
      case 'Enterprise Scale':
        return 'bg-blue-100 text-blue-800';
      case 'SaaS Platform':
        return 'bg-purple-100 text-purple-800';
      case 'Cutting-Edge':
        return 'bg-red-100 text-red-800';
      case 'Complex Architecture':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Production-ready applications serving thousands of users with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200 cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-github-line text-gray-700"></i>
                    </div>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-external-link-line text-white"></i>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
                          <i className="ri-check-line text-green-600 text-xs"></i>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Portfolio Impact Summary
            </h3>
            <div className="grid md:grid-cols-4 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold mb-2">11,000+</div>
                <div className="text-blue-100">Total Users Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-blue-100">Production Applications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Average Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95+</div>
                <div className="text-blue-100">PageSpeed Score</div>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              All projects are live, production-ready, and demonstrate enterprise-scale engineering capabilities
            </p>
            <a
              href="https://github.com/goutam-roy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center cursor-pointer whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-github-line"></i>
              </div>
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
