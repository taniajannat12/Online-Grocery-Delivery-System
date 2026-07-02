"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const adminEmail = "taniajannat206@gmail.com";

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    if (user.email !== adminEmail) {
      alert("Access Denied!");
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user || user.email !== adminEmail) {
    return null;
  }

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}

      <div className="w-64 min-h-screen bg-green-700 text-white p-6 shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-3">

          <li>
            <a
              href="/admin/orders"
              className="block px-4 py-3 rounded-xl hover:bg-green-600 transition"
            >
              📦 Orders
            </a>
          </li>

          <li>
            <a
              href="/admin/messages"
              className="block px-4 py-3 rounded-xl hover:bg-green-600 transition"
            >
              💬 Messages
            </a>
          </li>

          <li>
            <a
              href="/"
              className="block px-4 py-3 rounded-xl hover:bg-green-600 transition"
            >
              🏠 Back to Website
            </a>
          </li>

        </ul>

      </div>

      {/* Content */}

      <div className="flex-1 bg-gray-100 p-8">
        {children}
      </div>

    </div>
  );
}