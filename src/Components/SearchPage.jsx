import { useSearchParams } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import Navbar from './Navbar';
import Footer from './Footer';

const SearchPage = ({ allProducts }) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    
    // সার্চ করা আইটেমটি ফিল্টার করা
    const results = allProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
        <Navbar/>
            
           
        <div className="pt-24 px-16">
            <h1 className="text-3xl font-bold mb-8">Search Results for: {query}</h1>
            {results.length > 0 ? (
                <ProductGrid products={results} />
            ) : (
                <p>No Products Found</p>
            )}
        </div>
       
   
       <Footer/>
       </>
    );
};
export default SearchPage;