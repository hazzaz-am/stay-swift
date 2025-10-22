import { getAllHotelsFromDB } from "@/queries/hotels";
import HotelCard from "./HotelCard";
import NoHotels from "./NoHotels";

interface IProps {
	destination: string;
	checkIn: string;
	checkOut: string;
	category: string;
}

const HotelList = async ({
	destination,
	checkIn,
	checkOut,
	category,
}: IProps) => {
	const hotels = await getAllHotelsFromDB(
		destination,
		checkIn,
		checkOut,
		category
	);
	return (
		<div className="col-span-9">
			<div className="space-y-4">
				{hotels.length > 0 ? (
					hotels.map((hotel) => (
						<HotelCard
							key={hotel.id}
							hotelInfo={hotel}
							checkIn={checkIn}
							checkOut={checkOut}
						/>
					))
				) : (
					<NoHotels />
				)}
			</div>
		</div>
	);
};

export default HotelList;
