import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
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
})

export const BookingModel = mongoose.models.bookings ?? mongoose.model("bookings", BookingSchema);