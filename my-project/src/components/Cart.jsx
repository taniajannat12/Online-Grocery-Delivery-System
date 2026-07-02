"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const router = useRouter();

  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8 min-h-screen">
      <h2 className="text-4xl font-bold mt-24 mb-8">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.weight}`}
              className="border rounded-xl p-5 mb-5 flex justify-between items-center"
            >
              <div className="flex gap-5 items-center">
                <img
                  src={item.image}
                  className="w-28 h-28 rounded-lg object-cover"
                  alt={item.name}
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p>Weight : {item.weight}</p>

                  <p>Quantity : {item.quantity}</p>

                  <p className="text-green-700 font-bold">
                    ${item.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
  removeFromCart(item.id, item.weight);
  toast.error("🗑️ Product removed from cart");
}}
                className="bg-red-500 text-white px-6 py-3 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-8">
            <h2 className="text-4xl font-bold">
              Total : ${total.toFixed(2)}
            </h2>

            <button
              onClick={() => router.push("/checkout")}
              className="mt-5 bg-green-700 text-white px-8 py-4 rounded-full"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;