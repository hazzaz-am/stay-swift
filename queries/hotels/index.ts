import { HotelModel, IHotel } from "@/models/hotelModel";
import { RatingModel, IRating } from "@/models/ratingModel";
import { IReview, ReviewModel } from "@/models/reviewModel";
import { replaceMongoIdInArray } from "@/utils/replaceMongoId";


const getAllHotelsFromDB = async () => {
  try {
    const response = await HotelModel.find().select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "countryCode", "propertyCategory"]).lean<IHotel[]>();
    return replaceMongoIdInArray(response);
  } catch (error) {
    console.error("Error fetching hotels from DB:", error);
    throw error;
  }
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

export { getAllHotelsFromDB, getRatingsForHotel, getReviewsForAHotel };