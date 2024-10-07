import React from "react";

const Navbar = () => {  
  return (
      <nav className="flex flex-row items-center justify-between p-4   h-auto">
        <div className="text-2xl font-bold font-sans">Gnews</div>
        <ul className="flex flex-row space-x-4 md:space-x-6 list-none font-bold">
            <li><a className="block">Home</a></li>
            <li><a className="block">Top'50 News</a></li>
        </ul>
      </nav>
  );
};

export default Navbar;
