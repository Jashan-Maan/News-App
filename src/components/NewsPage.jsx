import React, { useState } from "react";
import Navbar from "./Navbar";
import NewsContainers from "./NewsContainers";

const NewsPage = () => {
  const [category, setCategory] = useState("india");

  return (
    <div className="min-h-screen w-full  flex flex-col justify-start items-center">
      <Navbar setCategory={setCategory} />
      <NewsContainers category={category} />
    </div>
  );
};

export default NewsPage;
