import { BookingModel, IBooking } from "@/models/bookingModel";
import { replaceMongoIdInArray } from "@/utils/replaceMongoId";

const getBookingsByUser = async (userId: string) => {
  try {
    const response = await BookingModel.find({ userId: userId }).lean<IBooking[]>();
    return replaceMongoIdInArray(response);
  } catch (error) {
    console.error("Error while fetching bookings", error);
    throw error;
  }
};

export { getBookingsByUser };