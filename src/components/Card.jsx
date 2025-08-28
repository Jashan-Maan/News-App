import React from "react";

const Card = ({ article }) => {
  return article.urlToImage ? (
    <div className="flex flex-col justify-start items-center bg-neutral-800 text-white rounded-lg shadow-md w-xs">
      <img
        className="w-full h-52 object-cover rounded-tl-md rounded-tr-md mb-4 bg-cover bg-center"
        src={article.urlToImage}
        alt="News"
      />
      <h2 className="text-lg font-semibold mb-2 px-2">{article.title}</h2>
      <p
        id="scroll-bar"
        className="text-gray-200 px-2 h-14 overflow-auto scroll-auto"
      >
        {article.description}
      </p>
      <button className="mt-4 px-4 py-2 mb-2 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 hover:font-bold">
        <a href={article.url}>Read More</a>
      </button>
    </div>
  ) : null;
};

export default Card;
