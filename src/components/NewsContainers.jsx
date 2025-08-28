import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const NewsContainers = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  let fetchNews = async (category) => {
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <>
      <h1 className="text-3xl mt-4 font-bold text-black py-2 px-4">
        NewsOrbit - Top News
      </h1>
      <div className="flex justify-evenly items-start flex-wrap w-full  gap-6  px-4 py-2 mt-4">
        {newsData.map((article, index) => {
          return <Card key={index} article={article} />;
        })}
      </div>
    </>
  );
};

export default NewsContainers;
