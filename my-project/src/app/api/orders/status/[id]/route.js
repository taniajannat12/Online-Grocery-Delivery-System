
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "@/models/Order";

export async function PATCH(req, context) {
  try {
    await dbConnect();

    const { id } = await context.params;
    const body = await req.json();

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      {
        new: true,
      }
    );

    if (!updatedOrder) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Status Updated Successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}