import mongoose, { Schema, Document, Types } from "mongoose";

export interface IRating extends Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  hotelId: Types.ObjectId;
  rating: number;
}

const RatingSchema = new Schema<IRating>({
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

export const RatingModel = mongoose.models.ratings ?? mongoose.model<IRating>("ratings", RatingSchema);