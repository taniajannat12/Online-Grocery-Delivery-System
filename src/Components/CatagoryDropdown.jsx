import React from 'react';
import { useNavigate } from 'react-router-dom';

const CatagoryDropdown = ({ setIsDropdownOpen }) => {
  const navigate = useNavigate();

  const categories = [
    // { name: 'All', path: '/' },
    { name: 'Vegetables', path: '/category/vegetables' },
    { name: 'Fruits', path: '/category/fruits' },
    { name: 'Drinks & Snacks', path: '/category/Drinks & Snacks' },
    { name: 'Grocery Items', path: '/category/Grocery Items' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsDropdownOpen(false); 
  };

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => handleNavigate(cat.path)}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-50 hover:text-lime-600 transition"
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CatagoryDropdown;