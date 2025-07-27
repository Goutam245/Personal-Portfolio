'use client';

import useDarkMode from '../hooks/useDarkMode';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-md transform transition-transform duration-200 flex items-center justify-center ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? (
          <i className="ri-moon-line text-gray-700 text-sm"></i>
        ) : (
          <i className="ri-sun-line text-yellow-500 text-sm"></i>
        )}
      </div>
    </button>
  );
}