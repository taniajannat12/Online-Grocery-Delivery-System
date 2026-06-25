
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { productsData } from '../data'; 
// import Footer from './Footer';
// import Navbar from './Navbar';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = productsData.find(p => p.id === parseInt(id));
  
//   const [quantity, setQuantity] = useState(1);
//   const [selectedWeight, setSelectedWeight] = useState('500g');

//   const weightOptions = ['250g', '500g', '1kg', '2kg', '5kg'];

//   const getMultiplier = (w) => {
//     const m = { '250g': 0.5, '500g': 1, '1kg': 2, '2kg': 4, '5kg': 10 };
//     return m[w] || 1;
//   };

//   const totalPrice = product ? (product.price * getMultiplier(selectedWeight) * quantity).toFixed(2) : 0;

//   if (!product) {
//     return (
    
//       <div className="text-center py-20 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
       
//       </div>
//     );
//   }

//   return (
//         <>
//         <Navbar/>
//     <div className="max-w-6xl mx-auto pt-28 pb-16 px-6 md:px-16">
      

//       {/* Main Product Wrapper */}
//       <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row gap-12 p-6 md:p-10 border border-gray-100">
        
//         {/* Left Side - Image Box */}
//         <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="max-h-96 object-contain transform hover:scale-105 transition duration-500 rounded-xl"
//             onError={(e) => e.target.src = 'https://placehold.co/400x400?text=🛒'}
//           />
//         </div>

//         {/* Right Side - Details Box */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
          
//           {/* Category */}
//           <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2">
//             {product.category}
//           </span>
          
//           {/* Product Name */}
//           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
//             {product.name}
//           </h1>

//           {/* Base Price Display */}
//           <p className="text-3xl font-extrabold text-gray-800 mb-6">
//             ${product.price} <span className="text-xs text-gray-400 font-normal ml-1">per 500g</span>
//           </p>

//           <div className="border-t border-b border-gray-100 py-6 my-2 space-y-6">
            
//             {/* Weight Selection Buttons */}
//             <div>
//               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">
//                 Select Weight
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {weightOptions.map(weight => (
//                   <button
//                     key={weight}
//                     onClick={() => setSelectedWeight(weight)}
//                     className={`px-5 py-2.5 rounded-full text-xs font-bold border transition duration-200 ${
//                       selectedWeight === weight 
//                         ? 'border-green-600 bg-green-50 text-green-700 shadow-xs' 
//                         : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
//                     }`}
//                   >
//                     {weight}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity Selector Counter */}
//             <div className="flex items-center gap-4">
//               <span className="text-xs font-bold text-gray-500 uppercase tracking-wider w-20">Quantity</span>
//               <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-inner">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-gray-700 hover:bg-gray-200 transition shadow-xs"
//                 >
//                   −
//                 </button>
//                 <span className="w-12 text-center font-bold text-gray-800 text-sm">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-gray-700 hover:bg-gray-200 transition shadow-xs"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Dynamic Total Amount Row */}
//             <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 flex justify-between items-center mt-4 shadow-inner">
//               <span className="text-sm font-semibold text-gray-600">Total Amount</span>
//               <span className="text-2xl font-black text-green-700">${totalPrice}</span>
//             </div>
//           </div>

//           {/* Checkout Button */}
        
//           <button
//             onClick={() => alert(`Added ${quantity} x ${selectedWeight} ${product.name}\nTotal: ৳${totalPrice}`)}
//             className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-full text-sm font-bold shadow-lg hover:shadow-green-100 transition duration-300 mt-6 "
//           >
//            ${Cart}🛒 Add to Cart
//           </button>
//         </div>

//       </div>
//     </div>


// {/* বাটনটিকে সেন্টার করার জন্য একটি ডিভ ব্যবহার করুন */}
// <div className="flex justify-center my-8">
//     <button 
//         onClick={() => navigate('/')} 
//         className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
//     >
//         Back to Shop
//     </button>
// </div>
//     <Footer/>
//     </>
//   );
// };

// export default ProductDetails;


// "use client";
// import React, { useState } from 'react';
// import { useRouter,useParams } from 'next/navigation';

// import { productsData } from '../data'; 
// import Footer from './Footer';
// import Navbar from './Navbar';

// const ProductDetails = () => {
//   const params = useParams();
//   const id = params?.id;
//  const router = useRouter();
//   const product = productsData.find(p => p.id === parseInt(id));
  
//   const [quantity, setQuantity] = useState(1);
//   const [selectedWeight, setSelectedWeight] = useState('500g');

//   const weightOptions = ['250g', '500g', '1kg', '2kg', '5kg'];

//   const getMultiplier = (w) => {
//     const m = { '250g': 0.5, '500g': 1, '1kg': 2, '2kg': 4, '5kg': 10 };
//     return m[w] || 1;
//   };

//   const totalPrice = product ? (product.price * getMultiplier(selectedWeight) * quantity).toFixed(2) : 0;

//   // Add this function to handle cart navigation
//   const handleAddToCart = () => {
//     alert(`Added ${quantity} x ${selectedWeight} ${product.name}\nTotal: ৳${totalPrice}`);
   
   
//    router.push('/cart');
//   };

//   if (!product) {
//     return (
//       <div className="text-center py-20 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar/>
//       <div className="max-w-6xl mx-auto pt-28 pb-16 px-6 md:px-16">
//         <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row gap-12 p-6 md:p-10 border border-gray-100">
//           <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="max-h-96 object-contain transform hover:scale-105 transition duration-500 rounded-xl"
//               onError={(e) => e.target.src = 'https://placehold.co/400x400?text=🛒'}
//             />
//           </div>

//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2">
//               {product.category}
//             </span>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
//               {product.name}
//             </h1>
//             <p className="text-3xl font-extrabold text-gray-800 mb-6">
//               ${product.price} <span className="text-xs text-gray-400 font-normal ml-1">per 500g</span>
//             </p>

//             <div className="border-t border-b border-gray-100 py-6 my-2 space-y-6">
//               <div>
//                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">
//                   Select Weight
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {weightOptions.map(weight => (
//                     <button
//                       key={weight}
//                       onClick={() => setSelectedWeight(weight)}
//                       className={`px-5 py-2.5 rounded-full text-xs font-bold border transition duration-200 ${
//                         selectedWeight === weight 
//                           ? 'border-green-600 bg-green-50 text-green-700 shadow-xs' 
//                           : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
//                       }`}
//                     >
//                       {weight}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <span className="text-xs font-bold text-gray-500 uppercase tracking-wider w-20">Quantity</span>
//                 <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-inner">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-gray-700 hover:bg-gray-200 transition shadow-xs"
//                   >
//                     −
//                   </button>
//                   <span className="w-12 text-center font-bold text-gray-800 text-sm">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-gray-700 hover:bg-gray-200 transition shadow-xs"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 flex justify-between items-center mt-4 shadow-inner">
//                 <span className="text-sm font-semibold text-gray-600">Total Amount</span>
//                 <span className="text-2xl font-black text-green-700">${totalPrice}</span>
//               </div>
//             </div>

//             <button
//               onClick={handleAddToCart}
//               className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-full text-sm font-bold shadow-lg hover:shadow-green-100 transition duration-300 mt-6"
//             >
//               🛒 Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center my-8">
//         <button 
//             onClick={() => navigate('/')} 
//             className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
//         >
//             Back to Shop
//         </button>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default ProductDetails;


"use client";
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation'; // সঠিক ইমপোর্ট
import { productsData } from '../data'; 
import Footer from './Footer';
import Navbar from './Navbar';

const ProductDetails = () => {
  const params = useParams(); // params এখান থেকে নিন
  const id = params?.id;
  const router = useRouter();
  
  // প্রোডাক্ট খুঁজে বের করা
  const product = productsData.find(p => p.id === parseInt(id));
  
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g');

  const weightOptions = ['250g', '500g', '1kg', '2kg', '5kg'];

  const getMultiplier = (w) => {
    const m = { '250g': 0.5, '500g': 1, '1kg': 2, '2kg': 4, '5kg': 10 };
    return m[w] || 1;
  };

  const totalPrice = product ? (product.price * getMultiplier(selectedWeight) * quantity).toFixed(2) : 0;

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${selectedWeight} ${product.name}\nTotal: ৳${totalPrice}`);
    router.push('/cart');
  };

  if (!product) {
    return (
      <div className="text-center py-20 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
      </div>
    );
  }

  // আপনার ডিজাইন হুবহু রাখা হয়েছে
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-28 pb-16 px-6 md:px-16">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row gap-12 p-6 md:p-10 border border-gray-100">
          <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-96 object-contain transform hover:scale-105 transition duration-500 rounded-xl"
              onError={(e) => e.target.src = 'https://placehold.co/400x400?text=🛒'}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              {product.name}
            </h1>
            <p className="text-3xl font-extrabold text-gray-800 mb-6">
              ${product.price} <span className="text-xs text-gray-400 font-normal ml-1">per 500g</span>
            </p>

            <div className="border-t border-b border-gray-100 py-6 my-2 space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">
                  Select Weight
                </label>
                <div className="flex flex-wrap gap-2">
                  {weightOptions.map(weight => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold border transition duration-200 ${
                        selectedWeight === weight 
                          ? 'border-green-600 bg-green-50 text-green-700 shadow-xs' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider w-20">Quantity</span>
                <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-inner">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-gray-700 hover:bg-gray-200 transition shadow-xs"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-bold text-gray-800 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-gray-700 hover:bg-gray-200 transition shadow-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 flex justify-between items-center mt-4 shadow-inner">
                <span className="text-sm font-semibold text-gray-600">Total Amount</span>
                <span className="text-2xl font-black text-green-700">${totalPrice}</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-full text-sm font-bold shadow-lg hover:shadow-green-100 transition duration-300 mt-6"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <button 
            onClick={() => router.push('/')} 
            className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
        >
            Back to Shop
        </button>
      </div>
     
    </>
  );
};

export default ProductDetails;