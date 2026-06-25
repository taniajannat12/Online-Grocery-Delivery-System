
// "use client";
// import { GiFruitBowl } from "react-icons/gi";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// //import { Link, useNavigate } from 'react-router-dom'; // useNavigate ইমপোর্ট করুন


// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { useState } from 'react';
// import CatagoryDropdown from './CatagoryDropdown';
// import { productsData } from '../data'; // আপনার ডাটা ফাইলটি ইমপোর্ট করুন

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");
//   //  const navigate = useNavigate(); // হুকটি ব্যবহার করুন
// const router = useRouter();
//     const handleSearch = (e) => {
//         if (e.key === 'Enter') {
//             // প্রোডাক্টটি ডাটাবেজে খুঁজুন
//             const foundProduct = productsData.find(p => 
//                 p.name.toLowerCase() === searchTerm.toLowerCase()
//             );

//             // if (foundProduct) {
//             //    navigate(`/search?q=${searchTerm}`);
//             // } else {
//             //     navigate('/not-found');
//             // }
//             if (foundProduct) {
//    router.push(`/search?q=${searchTerm}`);
// } else {
//    router.push('/not-found');
// }
//         }
//     };

//     return (
//         <div>
//             <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 py-5 bg-white shadow-sm">
                
//                 {/* Logo Section */}
//                 <div className="flex items-center gap-4">
//                     <GiFruitBowl className="text-5xl text-orange-400" />
//                     <div>
//                         <h1 className="text-4xl font-bold leading-none text-gray-800">Bacalo</h1>
//                         <p className="mt-1 text-[8px] tracking-[3px] text-gray-500 font-bold">ONLINE GROCERY STORE</p>
//                     </div>
//                 </div>

//                 {/* Search */}
//                 <div className="relative w-full max-w-md mx-8">
//                     <input 
//                         type="text" 
//                         placeholder="Search for groceries (e.g. Grape)..." 
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         onKeyDown={handleSearch} // এন্টার প্রেস করলে সার্চ হবে
//                         className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50"
//                     />
//                     <FaSearch className="absolute left-3 top-3 text-gray-400" />
//                 </div>

//                 {/* Links */}
//                 <ul className="flex gap-8 text-sm font-bold text-gray-700 items-center">
//                     <li><Link to="/" className="hover:text-lime-500 transition">Home</Link></li>
                    
//                     <li className="relative">
//                         <button 
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
//                             className="hover:text-lime-500 transition focus:outline-none"
//                         >
//                             Shop
//                         </button>
//                         {isDropdownOpen && <CatagoryDropdown setIsDropdownOpen={setIsDropdownOpen} />}
//                     </li>

//                     <li><Link to="/Contact" className="hover:text-lime-500 transition">Contact Us</Link></li>
//                     <li><Link to="/SignPage" className="px-5 py-2 border border-lime-500 rounded-full hover:bg-lime-500 hover:text-white transition">Sign Up</Link></li>

//                     <Link to="/cart" className="relative text-gray-700 hover:text-lime-500">
//                         <FaShoppingCart size={22} />
//                         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
//                             3
//                         </span>
//                     </Link>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;
"use client";

import { GiFruitBowl } from "react-icons/gi";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import CatagoryDropdown from "./CatagoryDropdown";
import { productsData } from "../data";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const foundProduct = productsData.find(
        (p) => p.name.toLowerCase() === searchTerm.toLowerCase()
      );

      if (foundProduct) {
        router.push(`/search?q=${searchTerm}`);
      } else {
        router.push("/not-found");
      }
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 py-5 bg-white shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <GiFruitBowl className="text-5xl text-orange-400" />
          <div>
            <h1 className="text-4xl font-bold leading-none text-gray-800">
              Bacalo
            </h1>
            <p className="mt-1 text-[8px] tracking-[3px] text-gray-500 font-bold">
              ONLINE GROCERY STORE
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-md mx-8">
          <input
            type="text"
            placeholder="Search for groceries (e.g. Grape)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full text-gray-600 pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-sm font-bold text-gray-700 items-center">
          <li>
            <Link href="/" className="hover:text-lime-500 transition">
              Home
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-lime-500 transition focus:outline-none"
            >
              Shop
            </button>

            {isDropdownOpen && (
              <CatagoryDropdown
                setIsDropdownOpen={setIsDropdownOpen}
              />
            )}
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-lime-500 transition"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              href="/signpage"
              className="px-5 py-2 border border-lime-500 rounded-full hover:bg-lime-500 hover:text-white transition"
            >
              Sign Up
            </Link>
          </li>

          <Link
            href="/cart"
            className="relative text-gray-700 hover:text-lime-500"
          >
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
              3
            </span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;