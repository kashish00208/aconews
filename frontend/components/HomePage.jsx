import React, { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState({ articles: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const results = await response.json();
        setData(results);
        console.log(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="article-container">
      {data.articles.map((article, index) => (
        <div key={index} className="border border-black m-10 p-10 rounded">
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.title} className="w-20 h-32" />
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
