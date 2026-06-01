import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignPage = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (data.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push(data);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Account Created! Ready to shop.");
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-green-500">
        <h2 className="text-3xl font-extrabold text-green-700 mb-2">Join FreshCart</h2>
        <p className="text-gray-500 mb-6">Get groceries delivered to your door.</p>
        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setData({...data, name: e.target.value})} required />
          <input type="email" placeholder="Email Address" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setData({...data, email: e.target.value})} required />
          <input type="password" placeholder="Password" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setData({...data, password: e.target.value})} required />
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default SignPage;