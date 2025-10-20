import mongoose, { Schema, Types } from "mongoose";


export interface IReview {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  hotelId: Types.ObjectId;
  review: number;
}

const ReviewSchema = new Schema<IReview>({
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


export const ReviewModel = mongoose.models.reviews ?? mongoose.model<IReview>("reviews", ReviewSchema);