import { NextResponse } from "next/server";

import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const contact = await Contact.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      contact,
    });
  } catch (error) {
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

export async function GET() {
  try {
    await dbConnect();

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
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