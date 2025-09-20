import React from "react";

const Card = ({ article }) => {
  // We'll still return null if there's no image, as it's crucial for the card's design.
  if (!article.urlToImage) {
    return null;
  }

  return (
    // The card is now a flex container that will fill the height of its grid cell (h-full).
    // It has a subtle border and a lift-up effect on hover.
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-neutral-800 text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <img
        // Using aspect-ratio is better than a fixed height for responsiveness.
        className="h-auto w-full object-cover aspect-video"
        src={article.urlToImage}
        alt={article.title} // Using the article title for alt text is better for accessibility.
      />

      {/* CONTENT CONTAINER */}
      {/* This div holds all the text and will grow to fill available space. */}
      <div className="flex flex-grow flex-col p-4">
        {/* TITLE */}
        {/* The title is limited to 2 lines to prevent overflow. */}
        <h3 className="mb-2 text-lg font-semibold line-clamp-2">
          {article.title}
        </h3>

        {/* DESCRIPTION */}
        {/* The description is limited to 3 lines. flex-grow pushes the button down. */}
        <p className="mb-4 flex-grow text-sm text-gray-300 line-clamp-3">
          {article.description}
        </p>

        {/* READ MORE BUTTON */}
        {/* The link is now styled directly as a button. */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full rounded-md bg-blue-600 px-4 py-2 text-center font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
