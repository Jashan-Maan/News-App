import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  let handleClick = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    setCategory(lowerCaseCategory);
    setActiveCategory(lowerCaseCategory);
    setIsMenuOpen(false);
  };
  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <a
            className="flex justify-start items-center text-xl lg:text-2xl font-semibold text-white"
            href="/"
          >
            <img className="h-16 lg:h-20" src="./lg.png" alt="NewsOrbit Logo" />
            <span>NewsOrbit</span>
          </a>

          {/* Desktop Category Links */}
          <div className="hidden lg:flex items-center space-x-6 font-medium text-lg text-gray-200">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(category)}
                className={`transition-all duration-300 pb-1 border-b-2 ${
                  activeCategory === category.toLowerCase()
                    ? "text-white scale-110 border-white"
                    : "text-gray-200 border-transparent hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/20 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                // Close Icon (X)
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 text-center">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(category)}
                className={`block w-full py-2 px-3 rounded-md text-base font-medium ${
                  activeCategory === category.toLowerCase()
                    ? "bg-white/20 text-white"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
