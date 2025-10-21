import { connectDB } from "@/services/mongo";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { BookingModel } from "@/models/bookingModel";

export const POST = async (request: NextRequest) => {
  try {
    const { hotelId, userId, checkIn, checkOut } = await request.json();
    await connectDB();
    const payload = {
      hotelId: ObjectId.createFromHexString(hotelId),
      userId: ObjectId.createFromHexString(userId),
      checkIn,
      checkOut
    };
    await BookingModel.create(payload);
    return new NextResponse("Booking completed successfully", { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      new NextResponse(error.message, { status: 500 });
    } else {
      new NextResponse("Server error", { status: 500 });
    }
  }
};