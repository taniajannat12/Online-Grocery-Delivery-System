


// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from './firebase'; // আপনার firebase.js ফাইল থেকে ইমপোর্ট
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // ফায়ারবেস মেথড
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const SignPage = () => {
//   const [data, setData] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Firebase-এ ইউজার ক্রিয়েট করা
//       await createUserWithEmailAndPassword(auth, data.email, data.password);
      
//       alert("Account Created Successfully!");
//       router.push('/login'); // সাকসেসফুল হলে লগইন পেজে পাঠান
//     } catch (error) {
//       alert("Error: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-green-50">
//         <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-green-500">
//           <h2 className="text-3xl font-extrabold text-green-700 mb-2">Join Bacalo</h2>
//           <p className="text-gray-500 mb-6">Get groceries delivered to your door.</p>
          
//           <form onSubmit={handleSignup} className="space-y-4">
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
//               onChange={(e) => setData({...data, email: e.target.value})} 
//               required 
//             />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
//               onChange={(e) => setData({...data, password: e.target.value})} 
//               required 
//             />
//             <button 
//               disabled={loading}
//               className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
//             >
//               {loading ? "Creating..." : "Sign Up"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignPage;





"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/components/firebase";

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import Link from "next/link";
const SignPage = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Password validation criteria
    // Requirements: At least 8 characters, 1 letter, 1 number, and 1 symbol
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordRegex.test(data.password)) {
      alert("Password must be at least 8 characters long and contain at least one letter, one number, and one special character (e.g., !, @, #, $).");
      setLoading(false);
      return;
    }

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
      // Set the user's display name
      await updateProfile(userCredential.user, { displayName: data.name });
      
 toast.success("Account Created Successfully!");
      router.push('/login'); 
    } 
    catch (error) {
  if (error.code === "auth/email-already-in-use") {
    toast.error("This email is already registered. Please login.");
  } else {
    toast.error(error.message);
  }
}
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-green-500">
          <h2 className="text-3xl font-extrabold text-green-700 mb-2">Join Bacalo</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Please provide a valid email and a strong password (at least 8 characters with 1 letter, 1 number, and 1 symbol).
          </p>
          
          <form onSubmit={handleSignup} className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
              onChange={(e) => setData({...data, name: e.target.value})} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
              onChange={(e) => setData({...data, email: e.target.value})} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-green-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400" 
              onChange={(e) => setData({...data, password: e.target.value})} 
              required 
            />
            <p className="text-center text-gray-600 mt-5">
  Already have an account?{" "}
  <Link
    href="/login"
    className="text-green-600 font-semibold hover:underline"
  >
    Login
  </Link>
</p>
            <button 
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignPage;