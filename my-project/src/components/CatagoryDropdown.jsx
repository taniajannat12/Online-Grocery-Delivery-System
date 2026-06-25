
// "use client";
// //import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/navigation';
// const CatagoryDropdown = ({ setIsDropdownOpen }) => {
//  const router = useRouter();
//   const categories = [
    
//     { name: 'Vegetables', path: '/category/vegetables' },
//     { name: 'Fruits', path: '/category/fruits' },
//     { name: 'Drinks & Snacks', path: '/category/Drinks&Snacks' },
//     { name: 'Grocery Items', path: '/category/Grocery Items' },
//   ];

//   const handleNavigate = (path) => {
//     router.push(path);
//     setIsDropdownOpen(false); 
//   };

//   return (
//     <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
//       {categories.map((cat, index) => (
//         <button
//           key={index}
//           onClick={() => handleNavigate(cat.path)}
//           className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-50 hover:text-lime-600 transition"
//         >
//           {cat.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default CatagoryDropdown;

"use client"; // এটি বাধ্যতামূলক, কারণ আমরা useRouter হুক ব্যবহার করছি

import { useRouter } from 'next/navigation';

const CatagoryDropdown = ({ setIsDropdownOpen }) => {
  const router = useRouter();

  const categories = [
    { name: 'Vegetables', path: '/category/vegetables' },
    { name: 'Fruits', path: '/category/fruits' },
    { name: 'Drinks & Snacks', path: '/category/drinks-and-snacks' },
    { name: 'Grocery Items', path: '/category/grocery-items' },
  ];

  const handleNavigate = (path) => {
    router.push(path); // পেজ পরিবর্তন করবে
    if (setIsDropdownOpen) setIsDropdownOpen(false); // ড্রপডাউন বন্ধ করবে
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