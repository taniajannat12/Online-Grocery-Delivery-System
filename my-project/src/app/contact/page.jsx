"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-24">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-2">
          Contact Us
        </h1>

        <p className="text-center text-gray-500 mb-8">
          We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 resize-none"
          />

          <button
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </div>
  );
}