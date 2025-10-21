import mongoose, { Schema, Types } from "mongoose";

export interface IBooking {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  hotelId: Types.ObjectId;
  checkIn: string;
  checkOut: string;
}

const BookingSchema = new Schema<IBooking>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "UserModel",
    required: true
  },
  hotelId: {
    type: Schema.Types.ObjectId,
    ref: "HotelModel",
    required: true
  },
  checkIn: {
    type: String,
    required: true
  },
  checkOut: {
    type: String,
    required: true
  }
});

export const BookingModel = mongoose.models.bookings ?? mongoose.model<IBooking>("bookings", BookingSchema);