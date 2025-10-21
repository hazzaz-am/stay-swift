import { BookingModel, IBooking } from "@/models/bookingModel";
import { HotelModel, IHotel } from "@/models/hotelModel";
import { RatingModel, IRating } from "@/models/ratingModel";
import { IReview, ReviewModel } from "@/models/reviewModel";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/replaceMongoId";
import { Types } from "mongoose";


const getAllHotelsFromDB = async (destination: string, checkIn: string, checkOut: string) => {
  try {
    const regex = new RegExp(destination, "i");
    const hotelByDestination = await HotelModel.find({ city: { $regex: regex } }).select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "countryCode", "propertyCategory"]).lean<IHotel[]>();

    let allHotels: IHotel[] = hotelByDestination;

    if (checkIn && checkOut) {
      allHotels = await Promise.all(
        allHotels.map(async (hotel) => {
          const found = await findBooking(hotel._id, checkIn, checkOut);
          return {
            ...hotel,
            isBooked: found ? true : false
          } as IHotel;
        })
      );
    }


    return replaceMongoIdInArray(allHotels);
  } catch (error) {
    console.error("Error fetching hotels from DB:", error);
    throw error;
  }
};

const getHotelDetailsById = async (hotelId: string, checkIn: string, checkOut: string) => {
  try {
    const response = await HotelModel.findOne({ _id: hotelId }).lean<IHotel>();
    if (!response) {
      throw Error("Hotel not found");
    }

    let hotel = response;
    if (checkIn && checkOut) {
      const found = await findBooking(hotelId, checkIn, checkOut);
      if (found) {
        hotel = {
          ...hotel,
          isBooked: found ? true : false
        } as IHotel;

      }
    }
    return replaceMongoIdInObject(hotel);
  } catch (error) {
    console.error("Error while fetching hotel details by Id", error);
    throw error;
  }
};

const findBooking = async (hotelId: Types.ObjectId | string, checkIn: string, checkOut: string) => {
  const hotelMatches = await BookingModel.find({ hotelId: hotelId.toString() }).lean<IBooking[]>();
  const found = hotelMatches.find((match) => {
    return checkIn < match.checkOut && checkOut > match.checkIn;
  });

  return found;

};

const getRatingsForHotel = async (hotelId: string) => {
  try {
    const response = await RatingModel.find({ hotelId }).lean<IRating[]>();
    return replaceMongoIdInArray(response);
  } catch (error) {
    console.error("Error fetching ratings for hotel:", error);
    throw error;
  }
};

const getReviewsForAHotel = async (hotelId: string) => {
  try {
    const response = await ReviewModel.find({ hotelId }).lean<IReview[]>();
    return replaceMongoIdInArray(response);
  } catch (error) {
    console.error("Error fetching reviews for hotel:", error);
    throw error;
  }
};

export { getAllHotelsFromDB, getRatingsForHotel, getReviewsForAHotel, getHotelDetailsById };