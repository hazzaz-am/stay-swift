
import mongoose, { Schema, Document, Types } from "mongoose";

export interface IHotel extends Document {
  _id: Types.ObjectId;
  name: string;
  address1: string;
  airportCode: string;
  city?: string;
  countryCode?: string;
  highRate?: number;
  lowRate?: number;
  propertyCategory?: number;
  stateProvinceCode?: string;
  thumbNailUrl?: string;
  gallery?: string[];
  overview?: string;
  amenities?: string[];
  isBooked?: boolean
}

const HotelSchema = new Schema<IHotel>({
  name: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  airportCode: {
    type: String,
    required: true
  },
  city: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  highRate: {
    type: Number,
  },
  lowRate: {
    type: Number,
  },
  propertyCategory: {
    type: Number,
  },
  stateProvinceCode: {
    type: String,
  },
  thumbNailUrl: {
    type: String,
  },
  gallery: {
    type: [String],
  },
  overview: {
    type: String,
  },
  amenities: {
    type: [String],
  }
})

export const HotelModel = mongoose.models.hotels ?? mongoose.model<IHotel>("hotels", HotelSchema);