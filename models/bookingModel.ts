import mongoose, { Schema, Types } from "mongoose";

export interface IBooking extends Document{
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  hotelId: Types.ObjectId;
  checkIn: string;
  checkOut: string;
}

export type IBookingDoc = Omit<IBooking, "_id"> & { id: string };

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