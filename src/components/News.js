import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cd9ea9ce06f344ebb9ae041f2a3e9915`
    )
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
      });
  }, [category]);

  const containerStyle = {
    padding: "20px"
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    textTransform: "capitalize",
    color: "#333"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>{category} News</p>

      <div style={gridStyle}>
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
