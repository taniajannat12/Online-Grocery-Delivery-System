import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* মেইন ব্যাকগ্রাউন্ড উইথ গ্র্যাডিয়েন্ট */}
      <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-6 pt-28">
        
        {/* মেইন কার্ড */}
        <div className="bg-white w-full max-w-lg p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100">
          
          <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Contact Us</h2>
          <p className="text-gray-400 text-center mb-8">We'd love to hear from you!</p>

          <form className="space-y-5">
            {/* ইনপুট ফিল্ডগুলো */}
            <div>
              <input type="text" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 bg-green-500 border-none text-slate-700" placeholder="Username" />
            </div>
            <div>
              <input type="email" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2  bg-green-500 border-none text-slate-700" placeholder="E-mail" />
            </div>
            <div>
              <input type="tel" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2  bg-green-500 border-none text-slate-700" placeholder="Phone" />
            </div>
            <div>
              <textarea className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 bg-green-500 border-none h-32 resize-none text-slate-700" placeholder="Message"></textarea>
            </div>

            {/* বাটন */}
            <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-lg  bg-green-500 transition-all duration-300 shadow-lg shadow-indigo-200">
              SEND →
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;