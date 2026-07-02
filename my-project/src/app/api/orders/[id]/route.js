import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "@/models/Order";

export async function DELETE(req, context) {
  try {
    await dbConnect();

    const { id } = await context.params;

    console.log("Delete ID:", id);

    const deletedOrder = await Order.findByIdAndDelete(id);

    console.log("Deleted:", deletedOrder);

    if (!deletedOrder) {
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
      message: "Order Deleted Successfully",
    });
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