import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import EverythingCard from "./EverythingCard";
import '../styles/AllNews.css'

const AllNews = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/all-news");
        console.log("Response status:", response.status); 
        if (!response.ok) {
          throw new Error("Network response was not OK!");
        }
        const result = await response.json();
        console.log("API result:", result);
        setData(result.data.results);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
    
  }, []);

  return (
    <div>
      <h1>All News</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="articles-container">
          {data.map((article, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNews;
