"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const MyOrders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const getOrders = async () => {
      try {
        const res = await fetch(
          `/api/orders/user?email=${user.email}`
        );

        const data = await res.json();

        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="container mx-auto py-40 text-center">
        <h2 className="text-2xl font-bold">
          Please Login First
        </h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto py-40 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-28">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white shadow rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold">
            No Orders Found
          </h2>
        </div>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order._id}
              className="border rounded-xl shadow p-6 bg-white"
            >

              <div className="flex justify-between mb-4">

                <div>

                  <h2 className="text-xl font-bold">
                    Order ID
                  </h2>

                  <p className="text-gray-500">
                    {order._id}
                  </p>

                </div>

                <div>

                  <span
                    className={`px-4 py-2 rounded-full text-white font-semibold
                    ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : order.status === "Confirmed"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }`}
                  >
                    {order.status}
                  </span>

                </div>

              </div>

              <p>
                <strong>Total:</strong> ${order.total}
              </p>

              <p>
                <strong>Payment:</strong> {order.paymentMethod}
              </p>

              <p>
                <strong>Transaction ID:</strong> {order.transactionId}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>

              <div className="mt-5">

                <h3 className="font-bold mb-2">
                  Ordered Items
                </h3>

                {order.items.map((item, index) => (

                  <div
                    key={index}
                    className="flex justify-between border-b py-2"
                  >

                    <span>
                      {item.name}
                    </span>

                    <span>
                      {item.quantity} × ${item.price}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default MyOrders;