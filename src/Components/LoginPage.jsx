import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert("Welcome back, " + user.name + "!");
      navigate('/home'); // ধরে নিচ্ছি আপনার একটি হোম পেজ আছে
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-green-500">
        <h2 className="text-3xl font-extrabold text-green-700 mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Login to continue shopping.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setPassword(e.target.value)} required />
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;