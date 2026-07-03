
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { GiFruitBowl } from "react-icons/gi";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import CatagoryDropdown from "./CatagoryDropdown";
import { productsData } from "../data";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

import { signOut } from "firebase/auth";
import { auth } from "@/components/firebase";

import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const { user } = useAuth();
  const { cartItems } = useCart();
  
  // তোমার অ্যাডমিন ইমেইল
  const adminEmail = "taniajannat206@gmail.com";

  // Total Cart Quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // লগআউটের সময় যদি অ্যাডমিন সেশন থাকে তাও মুছে ফেলো
      localStorage.removeItem("isAdmin"); 
      toast.success("Logged Out Successfully");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full text-gray-600 pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      <ul className="flex items-center gap-8 text-sm font-bold text-gray-700">
        <li><Link href="/" className="hover:text-lime-500">Home</Link></li>
        <li className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hover:text-lime-500">
            Shop
          </button>
          {isDropdownOpen && <CatagoryDropdown setIsDropdownOpen={setIsDropdownOpen} />}
        </li>
        <li><Link href="/contact" className="hover:text-lime-500">Contact Us</Link></li>

        {user ? (
          <>
            {/* এখানে অ্যাডমিন চেক করা হয়েছে */}
            <li className="text-green-700 font-bold">
              {user.email === adminEmail ? (
                <Link href="/admin/orders" className="text-orange-600 underline hover:text-orange-700">
                  Admin Panel
                </Link>
              ) : (
                user.displayName || user.email
              )}
            </li>

            <li>
              <Link href="/my-orders" className="hover:text-lime-500">My Orders</Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link href="/login" className="hover:text-lime-500">Login</Link></li>
            <li>
              <Link href="/signpage" className="px-5 py-2 border border-lime-500 rounded-full hover:bg-lime-500 hover:text-white transition">
                Sign Up
              </Link>
            </li>
          </>
        )}

        <li>
          <Link href="/cart" className="relative text-gray-700 hover:text-lime-500">
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;