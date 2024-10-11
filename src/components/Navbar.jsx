import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/indonesia" className="hover:text-gray-300">Indonesia</Link>
          <Link to="/programming" className="hover:text-gray-300">Programming</Link>
          <Link to="/covid-19" className="hover:text-gray-300">COVID-19</Link>
          <Link to="/saved" className="hover:text-gray-300">Saved</Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-l-md text-black"
          />
          <button className="bg-yellow-500 text-black px-4 py-1 rounded-r-md hover:bg-yellow-600">
            Cari berita
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;