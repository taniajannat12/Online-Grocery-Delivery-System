import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  // ১. প্রোডাক্ট না থাকলে মেসেজ দেখানো
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 text-lg text-gray-500">
        No products found
      </div>
    );
  }

  // ২. গ্রিড লেআউট (এখানেই কার্ডগুলো সমান সাইজের হবে)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 justify-items-center items-stretch mx-auto max-w-6xl px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;