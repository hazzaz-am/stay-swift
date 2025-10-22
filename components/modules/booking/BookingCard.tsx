import { getHotelDetailsById } from "@/queries/hotels";

interface IProps {
	hotelId: string;
	checkIn: string;
	checkOut: string;
}

export default async function BookingCard({
	hotelId,
	checkIn,
	checkOut,
}: IProps) {
	const hotelInfo = await getHotelDetailsById(hotelId, checkIn, checkOut);
	return (
		<div className="flex justify-between items-center ">
			<div>
				<h3 className="text-xl font-semibold">{hotelInfo.name}</h3>
				<div className="text-sm text-gray-600 my-4">
					<p>Check In: {checkIn}</p>
					<p>Check Out: {checkOut}</p>
				</div>
			</div>

			<div>
				<h3 className="text-xl font-semibold text-right">$124</h3>
				<p className="text-sm text-gray-600">$62 per night x 2 days</p>
			</div>
		</div>
	);
}
