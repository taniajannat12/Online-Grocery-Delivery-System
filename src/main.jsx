import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // আপনার Tailwind CSS ফাইল
import SignPage from "./Components/SignPage";
import LoginPage from "./Components/LoginPage";
import Home from './Components/Home'; // ডট এবং স্লাশ (./) ঠিক আছে কি না নিশ্চিত করুন
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home />} />
        
        <Route path="/signup" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
        
              <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout/>} />
      
     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);