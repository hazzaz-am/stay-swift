import { HotelModel, IHotel } from "@/models/hotelModel";
import { replaceMongoIdInArray } from "@/utils/replaceMongoId";


const getAllHotelsFromDB = async () => {
  try {
    const response = await HotelModel.find().lean<IHotel[]>();
    return replaceMongoIdInArray(response);
  } catch (error) {
    console.error("Error fetching hotels from DB:", error);
    throw error;
  }
}

export { getAllHotelsFromDB };