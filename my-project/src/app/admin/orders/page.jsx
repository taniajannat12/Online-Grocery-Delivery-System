

// "use client";

// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   const getOrders = async () => {
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();

//     if (data.success) {
//       setOrders(data.orders);
//     }
//   };

//   useEffect(() => {
//     getOrders();
//   }, []);

//   const deleteOrder = async (id) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;

//     try {
//       const res = await fetch(`/api/orders/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();

//       if (data.success) {
//         toast.success("Order Deleted Successfully");
//         getOrders(); // Refresh Table
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="container mx-auto p-10">

//       <h1 className="text-4xl font-bold mb-8">
//         All Orders
//       </h1>

//       {orders.length === 0 ? (
//         <h2>No Orders Found</h2>
//       ) : (
//         <table className="w-full border">

//           <thead className="bg-green-700 text-white">

//             <tr>
//               <th className="p-3">Customer</th>
//               <th className="p-3">Phone</th>
//               <th className="p-3">Payment</th>
//               <th className="p-3">Total</th>
//               <th className="p-3">Date</th>
//               <th className="p-3">Action</th>
//             </tr>

//           </thead>

//           <tbody>

//             {orders.map((order) => (

//               <tr key={order._id} className="border">

//                 <td className="p-3">{order.customerName}</td>

//                 <td className="p-3">{order.phone}</td>

//                 <td className="p-3">{order.paymentMethod}</td>

//                 <td className="p-3">${order.total}</td>

//                 <td className="p-3">
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </td>

//                 <td className="p-3">

//                   <button
//                     onClick={() => deleteOrder(order._id)}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>
//       )}

//     </div>
//   );
// };

// export default AdminOrders;


"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  // Get All Orders
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

  // Delete Order
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

  return (
    <div className="container mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        All Orders
      </h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        <table className="w-full border border-gray-300">

          <thead className="bg-green-700 text-white">

            <tr>
              <th className="p-3">Customer</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order._id} className="border">

                <td className="p-3">{order.customerName}</td>

                <td className="p-3">{order.phone}</td>

                <td className="p-3">{order.paymentMethod}</td>

                <td className="p-3">${order.total}</td>

                <td className="p-3">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order._id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>

                <td className="p-3">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      )}

    </div>
  );
};

export default AdminOrders;