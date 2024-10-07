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
    <>
    <div className="text-center text-black text-3xl font-bold">Trending</div>
    <div>
      
    </div>
    <div className="article-container p-32 pt-8 grid gap-x-10 gap-y-10 grid-cols-3">
      {data.articles.map((article, index) => (
        <div key={index} className="border border-black rounded">
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.title} className="w-20 h-32" />
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
    </>
  );
  
}

export default HomePage;
