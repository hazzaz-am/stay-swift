import { getAllHotelsFromDB } from "@/queries/hotels";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  const hotels = await getAllHotelsFromDB()
  console.log(hotels);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
       <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
