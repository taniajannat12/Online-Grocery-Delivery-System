import Cart from "@/components/Cart"; // আপনার কম্পোনেন্ট পাথ ঠিক রাখুন

export default function CartPage() {
  return <Cart />;
}

// "use client";

// import { useCart } from "@/context/CartContext";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const router = useRouter();

//   const { cartItems, setCartItems } = useCart();

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price,
//     0
//   );

//   return (
//     <div className="max-w-6xl mx-auto pt-28 px-6 pb-20">

//       <h1 className="text-4xl font-bold mb-10">
//         Shopping Cart
//       </h1>

//       {cartItems.length === 0 ? (

//         <div className="text-center">

//           <h2 className="text-2xl mb-5">
//             Your Cart is Empty
//           </h2>

//           <button
//             onClick={() => router.push("/")}
//             className="bg-green-700 text-white px-6 py-3 rounded-full"
//           >
//             Continue Shopping
//           </button>

//         </div>

//       ) : (

//         <>
//           {cartItems.map((item) => (

//             <div
//               key={item.id}
//               className="flex justify-between items-center border rounded-xl p-5 mb-4 shadow"
//             >

//               <div className="flex items-center gap-4">

//                 <img
//                   src={item.image}
//                   className="w-24 h-24 object-cover rounded-lg"
//                 />

//                 <div>

//                   <h2 className="font-bold text-xl">
//                     {item.name}
//                   </h2>

//                   <p>
//                     Weight : {item.weight}
//                   </p>

//                   <p>
//                     Quantity : {item.quantity}
//                   </p>

//                   <p className="font-bold text-green-700">
//                     ${item.price}
//                   </p>

//                 </div>

//               </div>

//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="bg-red-500 text-white px-5 py-2 rounded-lg"
//               >
//                 Remove
//               </button>

//             </div>

//           ))}

//           <div className="mt-8 text-right">

//             <h2 className="text-3xl font-bold mb-5">
//               Total : ${totalPrice.toFixed(2)}
//             </h2>

//             <button
//               onClick={() => router.push("/checkout")}
//               className="bg-green-700 text-white px-8 py-4 rounded-full"
//             >
//               Proceed To Checkout
//             </button>

//           </div>

//         </>
//       )}

//     </div>
//   );
// };

// export default Cart;