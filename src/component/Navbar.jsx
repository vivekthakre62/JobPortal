import React, { useState } from 'react';
import logo from "../images/icon.svg";
import { motion } from "motion/react";
import { Menu2, X } from 'tabler-icons-react'; // install via: npm install tabler-icons-react

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className=" bg-gray-900 text-white w-full">

      <div className="flex justify-between items-center p-3 md:px-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="text-lg"><span className="font-bold">i-</span><span className="text-blue-600 font-bold">Jobs</span></h1>
        </div>

        <div className="hidden md:flex gap-6 text-sm items-center">
          <a href="#">Find Job</a>
          <a href="#">Find Talent</a>
          <a href="#">Post Job</a>
          <a href="#">Posted Job</a>
          <a href="#">Job History</a>
        </div>

      
        <div className="hidden md:flex items-center gap-3">
          <div className="relative w-64">
            <input
              type="text"
              className="w-full p-2 rounded-md text-black focus:outline-none border-b-2 border-gray-300 focus:border-blue-500 transition-all duration-300"
              placeholder="Search jobs here..."
              value={query}
              onChange={handleChange}
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-user-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </motion.div>
        </div>

       
        <button onClick={() => setSidebarOpen(true)} className="md:hidden">
          <Menu2 size={28} />
        </button>
      </div>

     
      <div className={`fixed top-0 left-0 h-full bg-black w-64 z-50 transform transition-transform duration-300
         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-xl font-bold">i-Jobs</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-white text-base">
          <a href="#" onClick={() => setSidebarOpen(false)}>Find Job</a>
          <a href="#" onClick={() => setSidebarOpen(false)}>Find Talent</a>
          <a href="#" onClick={() => setSidebarOpen(false)}>Post Job</a>
          <a href="#" onClick={() => setSidebarOpen(false)}>Posted Job</a>
          <a href="#" onClick={() => setSidebarOpen(false)}>Job History</a>
          
           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-user-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          <input
            type="text"
            placeholder="Search jobs here..."
            value={query}
            onChange={handleChange}
            className="mt-4 p-2 rounded text-black"
          />
      
          
       
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Navbar;
