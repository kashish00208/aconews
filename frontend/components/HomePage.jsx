import React, { useEffect, useState } from "react";
import dotgrid from "../src/assets/dot-grid.svg";

function HomePage() {
  const [data, setData] = useState({ articles: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
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
      <div className="bg-repeat flex flex-col flex-grow relative w-full h-full"  style={{
          backgroundImage: `url(${dotgrid})`,
        }}
      >
        <div className="text-center text-black text-3xl font-bold p-5 " >
          Trending
        </div>
        {data && data.articles && (
          <div className="mx-32  mb-12 flex shadow-lg mt-10 bg-white" >
            <img
              src={data.articles[0].image}
              className="w-2/3 h-60 rounded-xl"
              alt={data.articles[0].title}
            />
            <div className="p-5">
              <h2 className="font-bold text-xl ">{data.articles[0].title}</h2>
              <p className="pt-5">{data.articles[0].description}</p>
              <a
                href={data.articles[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        )}

        <div className="article-container p-32 pt-8 grid gap-x-10 gap-y-10 grid-cols-3 m-5">
          {data.articles.map((article, index) => (
            <div key={index} className="shadow-lg bg-white">
              <img
                src={article.image}
                alt={article.title}
                className=" w-72 h-52 rounded-lg"
              />
              <h2 className="text-sm font-bold">{article.title}</h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
