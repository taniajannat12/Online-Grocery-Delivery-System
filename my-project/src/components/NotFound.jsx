// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const NotFound = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
//             <h1 className="text-9xl font-bold text-gray-300">404</h1>
//             <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
//             <p className="text-gray-500 mt-2">Sorry !  This Item is not Found</p>
//             <button 
//                 onClick={() => navigate('/')} 
//                 className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition"
//             >
//                 Back to Home
//             </button>
//         </div>
//     );
// };

// export default NotFound;

"use client"; // ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করতে
import React from 'react';
import { useRouter } from 'next/navigation'; // সঠিক ইমপোর্ট

const NotFound = () => {
    const router = useRouter(); // useNavigate এর বদলে useRouter

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
            <h1 className="text-9xl font-bold text-gray-300">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2">Sorry ! This Item is not Found</p>
            <button 
                onClick={() => router.push('/')} // router.push ব্যবহার করা হয়েছে
                className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition"
            >
                Back to Home
            </button>
        </div>
    );
};

export default NotFound;