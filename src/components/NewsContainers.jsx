import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Spinner from "./Spinner";

const NewsContainers = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let fetchNews = async (category) => {
    setLoading(true);
    setError(null);
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-black py-2 ">
        Top Headlines in{" "}
        <span className="text-emerald-400">
          {capitalizeFirstLetter(category)}
        </span>
      </h1>

      {loading && <Spinner />}

      {error && <p className="text-red-400 text-center mt-10">{error}</p>}

      {!loading && !error && newsData.length === 0 && (
        <p className="text-gray-400 text-center mt-10">
          No articles found for this category.
        </p>
      )}
      {!loading && !error && newsData.length > 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
          {newsData.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      )}
    </>
  );
};

export default NewsContainers;
