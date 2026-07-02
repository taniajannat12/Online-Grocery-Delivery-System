



"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Checkout = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("bKash");

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    transId: "",
  });

  useEffect(() => {
    if (!user) {
      toast.error("Please login first!");
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          customerName: formData.customerName,
          phone: formData.phone,
          email: user.email,
          address: formData.address,
          paymentMethod,
          transactionId: formData.transId,
          items: cartItems,
          total,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Order Placed Successfully!");

        clearCart();

        setFormData({
          customerName: "",
          phone: "",
          address: "",
          transId: "",
        });

        router.push("/my-orders");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-extrabold text-green-700 mb-3">
          Secure Checkout
        </h1>

        <p className="text-gray-500 mb-10">
          Complete your order safely and securely.
        </p>

        <form
          onSubmit={handleOrder}
          className="grid lg:grid-cols-3 gap-8"
        >

          {/* LEFT */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

              <h2 className="text-2xl font-bold mb-8">
                Billing Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  required
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  value={user.email}
                  readOnly
                  className="md:col-span-2 border rounded-xl p-4 bg-gray-100 cursor-not-allowed"
                />

                <textarea
                  required
                  rows={4}
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Shipping Address"
                  className="md:col-span-2 border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>
                            {cartItems.map((item) => (
                <div
                  key={item.id + item.weight}
                  className="flex items-center justify-between mb-5 border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border"
                    />

                    <div>
                      <h3 className="font-bold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.weight} × {item.quantity}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-green-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h3>
                </div>
              ))}

              <div className="border-t pt-5 flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span className="text-green-700">
                  ${total.toFixed(2)}
                </span>
              </div>

            </div>

            {/* Payment */}

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

              <h2 className="text-2xl font-bold mb-6">
                Payment Method
              </h2>




{/* Payment Information */}

<div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-5">
  <h3 className="font-bold text-lg text-green-700 mb-2">
    Payment Instructions
  </h3>

  {paymentMethod === "bKash" && (
    <>
      <p>
        <strong>bKash Personal:</strong> 01712-345678
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Send the exact amount to this number and enter the Transaction ID below.
      </p>
    </>
  )}

  {paymentMethod === "Nagad" && (
    <>
      <p>
        <strong>Nagad Personal:</strong> 01812-345678
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Send the exact amount to this number and enter the Transaction ID below.
      </p>
    </>
  )}

  {paymentMethod === "Rocket" && (
    <>
      <p>
        <strong>Rocket Personal:</strong> 01912-345678
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Send the exact amount to this number and enter the Transaction ID below.
      </p>
    </>
  )}
</div>

              {["bKash", "Nagad", "Rocket"].map((method) => (

                <label
                  key={method}
                  className={`flex items-center justify-between border-2 rounded-2xl p-4 mb-4 cursor-pointer transition-all duration-300 ${
                    paymentMethod === method
                      ? "border-green-600 bg-green-50 shadow"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <input
                      type="radio"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />

                    <span className="font-semibold">
                      {method}
                    </span>

                  </div>

                </label>

              ))}

              <input
                required
                name="transId"
                value={formData.transId}
                onChange={handleInputChange}
                placeholder="Transaction ID"
                className="w-full border border-gray-300 rounded-xl p-4 mt-3 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button
                type="submit"
                className="w-full mt-8 bg-green-700 hover:bg-green-800 transition-all duration-300 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
              >
                Complete Order
              </button>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Checkout;