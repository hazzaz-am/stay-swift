import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

export const UserModel = mongoose.models.users ?? mongoose.model("users", UserSchema);