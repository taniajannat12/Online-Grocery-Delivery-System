

"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Get Orders
  const getOrders = async () => {
    try {
      const res = await fetch("/api/orders/all");
      const data = await res.json();

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  // Delete
  const deleteOrder = async (id) => {
    if (!confirm("Are you sure you want to delete this order?")) return;

    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Order Deleted Successfully");
        getOrders();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Update Status
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/orders/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Status Updated");
        getOrders();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  // View Details
  const openDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeDetails = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  return (
  <div className="container mx-auto p-10">

    <h1 className="text-4xl font-bold mb-8">
      All Orders
    </h1>

    {orders.length === 0 ? (
      <h2>No Orders Found</h2>
    ) : (

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Payment</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {order.customerName}
                </td>

                <td className="p-4">
                  {order.phone}
                </td>

                <td className="p-4">
                  {order.paymentMethod}
                </td>

                <td className="p-4 font-semibold text-green-700">
                  ${order.total}
                </td>

                <td className="p-4">

                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order._id, e.target.value)
                    }
                    className="border rounded-lg px-3 py-2"
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>

                </td>

                <td className="p-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4 flex gap-2 justify-center">

                  <button
                    onClick={() => openDetails(order)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </button>

                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    )}
          {/* Order Details Modal */}

      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold">
                Order Details
              </h2>

              <button
                onClick={closeDetails}
                className="text-3xl font-bold text-gray-500 hover:text-red-600"
              >
                ×
              </button>

            </div>

            {/* Customer */}

            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-bold">Customer</h4>
                <p>{selectedOrder.customerName}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-bold">Phone</h4>
                <p>{selectedOrder.phone}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-bold">Email</h4>
                <p>{selectedOrder.email}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-bold">Payment</h4>
                <p>{selectedOrder.paymentMethod}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4 col-span-2">
                <h4 className="font-bold">Address</h4>
                <p>{selectedOrder.address}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-bold">Transaction ID</h4>
                <p>{selectedOrder.transactionId}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-bold">Total</h4>
                <p className="text-green-700 font-bold">
                  ${selectedOrder.total}
                </p>
              </div>

            </div>

            {/* Products */}

            <h3 className="text-2xl font-bold mb-4">
              Ordered Products
            </h3>

            <div className="space-y-4">

              {selectedOrder.items.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 border rounded-xl p-4"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <p>Weight : {item.weight}</p>

                    <p>Quantity : {item.quantity}</p>

                    <p className="text-green-700 font-bold">
                      ${item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <button
              onClick={closeDetails}
              className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminOrders;