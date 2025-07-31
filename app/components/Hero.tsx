'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/b5r19VYp/111111111111.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80 dark:from-blue-900/95 dark:to-purple-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Goutam Roy</span>
            <span className="block text-3xl md:text-5xl font-normal text-blue-200 dark:text-blue-300 mt-4">
              Frontend Engineer & Technical Writer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Award-winning Frontend Architect with 2+ years building enterprise-scale applications serving 10,000+ users. 
            Ready for Staff Engineer trajectory at top-tier technology companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-gray-300 dark:text-gray-400 text-lg">
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-map-pin-line"></i>
              </div>
              <span>Dhaka, Bangladesh → Global Availability</span>
            </div>
            <div className="flex items-center text-gray-300 dark:text-gray-400 text-lg">
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-plane-line"></i>
              </div>
              <span>Relocation Ready • Ready for Visa Sponsorship</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 dark:hover:bg-gray-100 dark:hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-blue-200 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-down-line text-2xl"></i>
          </div>
        </a>
      </div>
    </section>
  );
}