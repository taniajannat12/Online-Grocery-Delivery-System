// import { useSearchParams } from 'react-router-dom';
// import ProductGrid from './ProductGrid';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const SearchPage = ({ allProducts }) => {
//     const [searchParams] = useSearchParams();
//     const query = searchParams.get('q');
    
//     // সার্চ করা আইটেমটি ফিল্টার করা
//     const results = allProducts.filter(p => 
//         p.name.toLowerCase().includes(query.toLowerCase())
//     );

//     return (
//         <>
//         <Navbar/>
            
           
//         <div className="pt-24 px-16">
//             <h1 className="text-3xl font-bold mb-8">Search Results for: {query}</h1>
//             {results.length > 0 ? (
//                 <ProductGrid products={results} />
//             ) : (
//                 <p>No Products Found</p>
//             )}
//         </div>
       
   
//        <Footer/>
//        </>
//     );
// };
// export default SearchPage;




"use client"; // এটি অবশ্যই দিতে হবে
import { useSearchParams } from 'next/navigation'; // সঠিক ইমপোর্ট
import ProductGrid from '@/components/ProductGrid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { productsData } from '@/data'; // ডাটা ফাইল থেকে ডাটা ইমপোর্ট করুন

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || ''; // কিউয়েরি না থাকলে খালি স্ট্রিং
    
    // সার্চ করা আইটেম ফিল্টার করা
    const results = productsData?.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="pt-24 px-16 min-h-screen">
                <h1 className="text-3xl font-bold mb-8">
                    {query ? `Search Results for: ${query}` : "Search Products"}
                </h1>
                
                {results && results.length > 0 ? (
                    <ProductGrid products={results} />
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-xl">No Products Found for "{query}"</p>
                    </div>
                )}
            </div>
           
        </>
    );
};

export default SearchPage;