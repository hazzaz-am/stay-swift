import mongoose, { Schema } from "mongoose";

const RatingSchema = new Schema({
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
  rating: {
    type: Number,
    required: true
  }
})

export const RatingModel = mongoose.models.ratings ?? mongoose.model("ratings", RatingSchema);