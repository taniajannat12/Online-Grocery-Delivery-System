
// export default ProductCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 transition-all hover:shadow-xl">
  
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      
  
      <p className="text-gray-500 text-xs uppercase font-medium">{product.category}</p>
      
     
      <h3 className="text-lg font-bold text-gray-800 my-1">{product.name}</h3>
      
    
      <div className="flex justify-between items-center mt-3">
        <p className="text-xl font-bold text-green-700">${product.price}</p>
        
        <Link to={`/product/${product.id}`}>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;