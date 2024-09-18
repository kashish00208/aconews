import React, { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log(data);
    const article = data.articles;
    console.log(article);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-10 bg-slate-100 h-screen ">
      <div className="flex justify-between">
        <h2 className="text-2xl   m-4 font-black">Gnews</h2>
        <h2 className="text-2xl   m-4 font-black">
          Stay Updated with Latest Insights
        </h2>
      </div>
      
    </div>
  );
}

export default HomePage;
