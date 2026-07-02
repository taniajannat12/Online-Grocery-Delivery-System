"use client";

import { useEffect, useState } from "react";

export default function Messages() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await fetch("/api/contact/all");

    const data = await res.json();

    if (data.success) {
      setContacts(data.contacts);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Contact Messages
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full bg-white shadow rounded-xl">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-4">Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Message</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            {contacts.map((item) => (

              <tr
                key={item._id}
                className="border-b text-center"
              >

                <td className="p-4">
                  {item.name}
                </td>

                <td>
                  {item.email}
                </td>

                <td>
                  {item.phone}
                </td>

                {/* <td className="max-w-sm">
                  {item.message}
                </td> */}
<td className="max-w-md p-4 text-left break-words whitespace-pre-wrap">
  {item.message}
</td>
                <td>
                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}