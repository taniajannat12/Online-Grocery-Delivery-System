import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "../../../models/Order";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    console.log("DEBUG: Body received in API:", JSON.stringify(body, null, 2));
 console.log("Received Body:", body);
   // src/app/api/orders/route.js
const order = await Order.create({
  customerName: body.customerName, // ফ্রন্টএন্ডের customerName কে ডাটাবেজের 'name' ফিল্ডে ম্যাপ করছি
  phone: body.phone,
  email: body.email,
  address: body.address,
  paymentMethod: body.paymentMethod,
  transactionId: body.transactionId,
  items: body.items,
  total: body.total,
});
    return NextResponse.json(
      {
        success: true,
        message: "Order placed successfully",
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}