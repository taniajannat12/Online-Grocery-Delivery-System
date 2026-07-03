
"use client"; 
import React from 'react';
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const Contact = () => {
  return (
    <>
      <Navbar />
      
     
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-28">
        
     
        <div className="bg-white w-full max-w-lg p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
          
          <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Contact Us</h2>
          <p className="text-gray-400 text-center mb-8">We'd love to hear from you!</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
         
            <div>
              <input type="text" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 border-none text-slate-700" placeholder="Username" />
            </div>
            <div>
              <input type="email" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 border-none text-slate-700" placeholder="E-mail" />
            </div>
            <div>
              <input type="tel" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 border-none text-slate-700" placeholder="Phone" />
            </div>
            <div>
              <textarea className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 border-none h-32 resize-none text-slate-700" placeholder="Message"></textarea>
            </div>

           
            <button className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-800 transition-all duration-300">
              SEND →
            </button>
          </form>
        </div>
      </div>
   
    </>
  );
};

export default Contact;