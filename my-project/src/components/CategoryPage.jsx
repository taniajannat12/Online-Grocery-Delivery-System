import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; 
import ProductGrid from './ProductGrid';
import Footer from './Footer';

const CategoryPage = ({ allProducts }) => {
  const { categoryName } = useParams();


  const filtered = allProducts?.filter(p => 
    p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
    <div className="pt-24 px-16">
      <Navbar />
      
   
      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold text-gray-800   uppercase tracking-wider">
          {categoryName}
        </h1>
        <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
      </div>
      
    
      {filtered && filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <div className="text-center py-20 text-gray-500">
           <p className="text-xl">No products found in this category.</p>
        </div>
      )}
    </div>
   
    </>
  );
};

export default CategoryPage;