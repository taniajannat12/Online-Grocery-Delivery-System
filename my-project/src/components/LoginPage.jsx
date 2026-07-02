// "use client"; // এটি যোগ করতে ভুলবেন না
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//       alert("Welcome back, " + user.name + "!");
//       router.push('/home'); 
//     } else {
//       alert("Invalid Email or Password!");
//     }
//   };
  
//   return (

//     <>
//     <Navbar/>
//     <div className="min-h-screen flex items-center justify-center bg-green-50">
//       <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-green-500">
//         <h2 className="text-3xl font-extrabold text-green-700 mb-2">Welcome Back</h2>
//         <p className="text-gray-500 mb-6">Login to continue shopping.</p>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input type="email" placeholder="Email Address" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setEmail(e.target.value)} required />
//           <input type="password" placeholder="Password" className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" onChange={(e) => setPassword(e.target.value)} required />
//           <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition">Login</button>
//         </form>
//       </div>
//     </div>


  
//     </>
//   );
// };
// export default LoginPage;


"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/components/firebase";


import { signInWithEmailAndPassword } from 'firebase/auth'; // এটি ইমপোর্ট করো
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { toast } from "react-toastify";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Firebase-এর মাধ্যমে লগইন
      await signInWithEmailAndPassword(auth, email, password);
      
    toast.success("Successfully Logged In!");
      router.push('/home'); // লগইন সাকসেসফুল হলে হোম পেজে পাঠাও
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-green-500">
          <h2 className="text-3xl font-extrabold text-green-700 mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-6">Login to continue shopping.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <p className="text-center text-gray-600 mt-5">
  Don't have an account?{" "}
  <Link
    href="/signpage"
    className="text-green-600 font-semibold hover:underline"
  >
    Sign Up
  </Link>
</p>
            <button 
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginPage;