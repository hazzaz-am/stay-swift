
import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
  hotelId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "HotelModel"
  },
  userId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "UserModel"
  },
  review: {
    required: true,
    type: Number
  },
});


export const ReviewModel = mongoose.models.reviews ?? mongoose.model("reviews", ReviewSchema);