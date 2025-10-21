import { getAllHotelsFromDB } from "@/queries/hotels";
import HotelCard from "./HotelCard";

interface IProps {
	destination: string;
	checkIn: string;
	checkOut: string;
}

const HotelList = async ({ destination, checkIn, checkOut }: IProps) => {
	const hotels = await getAllHotelsFromDB(destination, checkIn, checkOut);
	return (
		<div className="col-span-9">
			<div className="space-y-4">
				{hotels.map((hotel) => (
					<HotelCard key={hotel.id} hotelInfo={hotel} checkIn={checkIn} checkOut={checkOut} />
				))}
			</div>
		</div>
	);
};

export default HotelList;
