'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Linkedin', icon: 'ri-linkedin-box-fill', url: 'https://www.linkedin.com/in/goutam-roy-dev' },
    { name: 'Leetcode', icon: 'ri-expand-left-right-line', url: 'https://leetcode.com/u/Goutam57/' },
    { name: 'GitHub', icon: 'ri-github-line', url: 'https://github.com/Goutam245' },
    { name: 'Email', icon: 'ri-mail-line', url: 'mailto:goutam.roy.421917@gmail.com' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6"> 
              <h3 className="text-2xl font-bold mb-2">
                <span className="font-pacifico">Goutam Roy</span>
              </h3>
              <p className="text-gray-300 text-lg"> Frontend Developer & Technical Writer 
                
              </p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building enterprise-scale applications and leading high-performance teams. 
              Ready to contribute to world-class technology companies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line"></i>
                </div>
                <span className="text-sm">goutam.roy.421917@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-sm">+880 174 759 3452</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Goutam Roy. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Built with</span>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-sm">React</span>
                <span className="text-gray-400">•</span>
                <span className="text-blue-400 text-sm">Next.js</span>
                <span className="text-gray-400">•</span>
                <span className="text-blue-400 text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}