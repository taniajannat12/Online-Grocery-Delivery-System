
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

// src/app/category/[categoryName]/page.jsx
import ProductGrid from '@/components/ProductGrid';
import { productsData } from '@/data';

export default async function CategoryPage({ params }) {
  const { categoryName } = await params;

  // ক্যাটাগরি নাম অনুযায়ী ফিল্টারিং
  const filteredProducts = productsData?.filter((product) => {
    // ডাটা ফাইলের নামকে ইউআরএল ফ্রেন্ডলি ফরম্যাটে রূপান্তর
    const formattedCategory = product.category
      .toLowerCase()
      .replace(/ & /g, '-and-') 
      .replace(/ /g, '-');
      
    return formattedCategory === categoryName.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 text-amber-600   py-10 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center uppercase tracking-wider mb-10">
        {categoryName.replace(/-/g, ' ')}
      </h1>
      
      {filteredProducts?.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">এই ক্যাটাগরিতে কোনো প্রোডাক্ট পাওয়া যায়নি।</p>
        </div>
      )}
    </div>
  );
}