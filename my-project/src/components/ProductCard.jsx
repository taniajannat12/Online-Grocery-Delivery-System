

import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    // ১. h-full এবং flex flex-col যোগ করা হয়েছে যাতে কার্ড লম্বা হয়
    <div className="bg-white border border-gray-200 rounded-2xl p-4 transition-shadow duration-300 shadow-sm hover:shadow-xl flex flex-col h-full w-full">
      
      {/* ইমেজ সেকশন - সব কার্ডে ইমেজ বক্সের উচ্চতা সমান থাকবে */}
    
<div className="w-full h-48 bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
  <img 
    src={product.image} 
    alt={product.name} 
    className="w-full h-full object-cover" // object-cover ব্যবহার করলে সব ইমেজ সমানভাবে পূর্ণ বক্স জুড়ে থাকবে
  />
</div>
     
      
      {/* কন্টেন্ট এরিয়া - flex-grow দিয়ে বাটনগুলোকে নিচে ঠেলে দেওয়া হয়েছে */}
      <div className="flex flex-col flex-grow">
        <p className="text-gray-500 text-xs uppercase font-medium">{product.category}</p>
        <h3 className="text-lg font-bold text-gray-800 my-1">{product.name}</h3>
      </div>
      
      {/* বাটন এবং প্রাইস - সব কার্ডে একই লেভেলে থাকবে */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-xl font-bold text-green-700">${product.price}</p>
        
        <Link href={`/product/${product.id}`}>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;