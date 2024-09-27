import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import EverythingCard from "./EverythingCard";
import { useParams } from "react-router-dom";

const TopHeadlines = () => {
  const { category } = useParams(); // get category from url
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTopHeadlines = async () => {
        setIsLoading(true);
        setError(null);

      try {
        const response = await fetch(
          `http://localhost:3000/top-headlines/${category}`
        );
        if (!response.ok) {
          throw new Error("Network response was not OK!");
        }
        const result = await response.json();
        setData(result.results);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch top headlines. Please try agin later !!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopHeadlines();
  }, [category]);

  return (
    <div>
      <h1>Top Headlines in {category}</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="articles-container">
          {data.length > 0 ? (
            data.map((article, index) => (
              <EverythingCard
                key={index}
                title={article.title}
                description={article.description}
                imgUrl={article.image_url}
                publishedAt={article.pubDate}
                url={article.link}
                author={article.creator}
                source={article.source_name}
              />
            ))
          ) : (
            <p>No articles found for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopHeadlines;
