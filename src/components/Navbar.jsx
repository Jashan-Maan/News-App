import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");

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
  };
  return (
    <div className="w-full flex justify-between items-center gap-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-1">
      <a
        className="flex  justify-start items-center text-2xl font-semibold text-gray-200"
        href="/"
      >
        <img className="h-20" src="./lg.png" alt="" />
        NewsOrbit
      </a>
      <div className="flex w-3/4 justify-start items-center gap-6 font-medium text-base text-gray-200">
        {categories.map((category, idx) => {
          return (
            <h1
              key={idx}
              className={`cursor-pointer transition-colors duration-300 ${
                activeCategory === category.toLowerCase()
                  ? "text-blue-800 scale-105"
                  : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
