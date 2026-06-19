import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 
import SignPage from "./Components/SignPage";
import LoginPage from "./Components/LoginPage";
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Contact from './Components/Contact';
import Home from './Components/Home'
import { productsData } from './data'; // ডেটা ইমপোর্ট করলাম
import CategoryPage from './Components/CategoryPage';
import SearchPage from './Components/SearchPage';
import ProductDetails from "./Components/ProductDetails";
import NotFound from './Components/NotFound';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home />} />
        
        <Route path="/SignPage" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Contact" element={<Contact />} />
              <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout/>} />
    <Route 
  path="/category/:categoryName" 
  element={<CategoryPage allProducts={productsData} />} 
/>
<Route path="/product/:id" element={<ProductDetails />} />

     
   </Routes>
<Route path="/search" element={<SearchPage allProducts={productsData} />} />
    </BrowserRouter> */}
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/SignPage" element={<SignPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Checkout" element={<Checkout/>} />
    
    {/* ক্যাটাগরি পেজ */}
    <Route path="/category/:categoryName" element={<CategoryPage allProducts={productsData} />} />
    
    {/* প্রোডাক্ট ডিটেইলস */}
    <Route path="/product/:id" element={<ProductDetails />} />

    {/* সার্চ পেজ - এটি Routes এর ভেতরে আনুন */}
    <Route path="/search" element={<SearchPage allProducts={productsData} />} />
  
    <Route path="*" element={<NotFound />} /> 
</Routes> 
</BrowserRouter>
  </React.StrictMode>
);