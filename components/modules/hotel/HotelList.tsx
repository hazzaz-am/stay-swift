import { getAllHotelsFromDB } from "@/queries/hotels";
import HotelCard from "./HotelCard";

const HotelList = async () => {
	const hotels = await getAllHotelsFromDB();
	return (
		<div className="col-span-9">
			<div className="space-y-4">
				{hotels.map((hotel) => (
					<HotelCard key={hotel.id} hotelInfo={hotel} />
				))}
			</div>
		</div>
	);
};

export default HotelList;
