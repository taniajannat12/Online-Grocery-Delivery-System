
import { GiFruitBowl } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import {   FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Link ইমপোর্ট করুন
const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 py-5 bg-white shadow-sm">
 
            
              <div className="flex items-center gap-4">
                <GiFruitBowl className="text-5xl text-orange-400" />
                <div>
                  <h1 className="text-4xl font-bold leading-none text-gray-800">Bacalo</h1>
                  <p className="mt-1 text-[8px] tracking-[3px] text-gray-500 font-bold">ONLINE GROCERY STORE</p>
                </div>
              </div>
            
            
              <div className="relative w-full max-w-md mx-8">
                <input 
                  type="text" 
                  placeholder="Search for groceries..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50"
                />
              
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            
              {/* মেনু লিংকস */}
              <ul className="flex gap-8 text-sm font-bold text-gray-700 items-center">
              <li><Link to="/" className="hover:text-lime-500 transition">Home</Link></li>
  <li><Link to="/shop" className="hover:text-lime-500 transition">Shop</Link></li>

  <li><Link to="/Contact" className="hover:text-lime-500 transition">Contact Us</Link></li>
  <li><Link to="/SignPage" className="px-5 py-2 border border-lime-500 rounded-full hover:bg-lime-500 hover:text-white transition">Sign Up</Link></li>

<Link to="/cart" className="relative text-gray-700 hover:text-lime-500">
  <FaShoppingCart size={22} />
  {/* কার্টে আইটেম থাকলে ছোট ব্যাজ */}
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