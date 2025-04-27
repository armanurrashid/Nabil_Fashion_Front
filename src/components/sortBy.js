import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DownArrow from 'svgs/downArrow';

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  return (
    <div>
      <div className="relative inline-block text-left mx-5" ref={dropdownRef}>
        <div className="flex">
          <div className="flex items-center mx-4 text-gray-800">
            <p className="font-medium">Sort By:</p>
          </div>
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-black bg-white font-medium rounded-[50px] text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white border border-black"
            type="button"
          >
            Featured
         <DownArrow/>
          </button>
        </div>
        {isOpen && (
          <div
            id="dropdown"
            className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
          >
            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
              <li>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  Alphabetically, A-Z
                </Link>
              </li>
              <li>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  Alphabetically, Z-A
                </Link>
              </li>
              <li>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  Price, Low - High
                </Link>
              </li>
              <li>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  Price, High - Low
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortBy;
