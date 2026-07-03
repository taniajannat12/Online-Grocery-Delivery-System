




"use client";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { productsData } from "../data";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;

  const router = useRouter();

  const { addToCart } = useCart();
const { user } = useAuth();
  const product = productsData.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");

  const weightOptions = ["250g", "500g", "1kg", "2kg", "5kg"];

  const getMultiplier = (w) => {
    const m = {
      "250g": 0.5,
      "500g": 1,
      "1kg": 2,
      "2kg": 4,
      "5kg": 10,
    };

    return m[w] || 1;
  };

  const totalPrice = product
    ? (
        product.price *
        getMultiplier(selectedWeight) *
        quantity
      ).toFixed(2)
    : 0;

const handleAddToCart = () => {
  if (!user) {
    toast.error("Please login first!");
    router.push("/login");
    return;
  }

  addToCart({
    id: product.id,
    name: product.name,
    image: product.image,
    category: product.category,
    price: Number(totalPrice),
    quantity: quantity,
    weight: selectedWeight,
  });

  toast.success("🛒 Product added to cart!");
  router.push("/cart");
};
  if (!product) {
    return (
      <div className="text-center py-20 min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto pt-28 pb-16 px-6 md:px-16">

        <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row gap-12 p-6 md:p-10 border border-gray-100">

          <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-96 object-contain hover:scale-105 transition duration-500 rounded-xl"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">

            <span className="text-green-600 font-bold uppercase text-xs mb-2">
              {product.category}
            </span>

            <h1 className="text-4xl font-extrabold mb-3">
              {product.name}
            </h1>

            <p className="text-3xl font-bold mb-6">
              ${product.price}
              <span className="text-sm text-gray-400 ml-2">
                per 500g
              </span>
            </p>

            <div className="border-y py-6 space-y-6">

              <div>
                <label className="text-xs font-bold uppercase block mb-3">
                  Select Weight
                </label>

                <div className="flex gap-2 flex-wrap">

                  {weightOptions.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-5 py-2 rounded-full border font-semibold ${
                        selectedWeight === weight
                          ? "bg-green-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      {weight}
                    </button>
                  ))}

                </div>
              </div>

              <div className="flex items-center gap-4">

                <span className="font-bold">
                  Quantity
                </span>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                    className="bg-gray-200 w-10 h-10 rounded-full"
                  >
                    -
                  </button>

                  <span className="font-bold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(quantity + 1)
                    }
                    className="bg-gray-200 w-10 h-10 rounded-full"
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="bg-gray-100 rounded-xl p-4 flex justify-between">

                <span>Total</span>

                <span className="font-bold text-green-700 text-2xl">
                  ${totalPrice}
                </span>

              </div>

            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 bg-green-700 hover:bg-green-800 text-white py-4 rounded-full font-bold"
            >
              🛒 Add To Cart
            </button>

          </div>

        </div>

      </div>

      <div className="flex justify-center mb-10">

        <button
          onClick={() => router.push("/")}
          className="bg-green-700 text-white px-8 py-3 rounded-full"
        >
          Back To Shop
        </button>

      </div>
    </>
  );
};

export default ProductDetails;