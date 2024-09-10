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
    console.log(data)
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

      <div className="h-2/3 flex">
        {/* <!-- Section 1 --> */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 text-white flex items-center justify-center">
            <img src="" alt="" />
          </div>
          <div className="flex-1 text-white flex items-center justify-center">
            2
          </div>
        </div>

        {/* <!-- Section 2 --> */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 text-white flex items-center justify-center">
            3
          </div>
          <div className="flex-1 flex">
            <div className="w-1/2 text-white flex items-center justify-center">
              4
            </div>
            <div className="w-1/2 text-whiteflex items-center justify-center">
              5
            </div>
          </div>
        </div>
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default HomePage;
