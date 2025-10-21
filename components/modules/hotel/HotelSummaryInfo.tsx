import { IHotel } from "@/models/hotelModel";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";
import Link from "next/link";

interface IProps {
	hotelInfo: Partial<IHotel>;
	fromListPage: boolean;
	checkIn: string;
	checkOut: string;
}

const HotelSummaryInfo = ({
	hotelInfo,
	fromListPage,
	checkIn,
	checkOut,
}: IProps) => {

	let params = "";
	if (checkIn && checkOut) {
		params = `checkIn=${checkIn}&checkOut=${checkOut}`;
	}

	return (
		<>
			<div className={fromListPage ? "flex-1" : "flex-1 container"}>
				<h2
					className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
				>
					{hotelInfo?.name}
				</h2>
				<p>
					📍 {hotelInfo?.city} {hotelInfo?.countryCode}
				</p>
				<div className="flex gap-2 items-center my-4">
					<HotelRating hotelId={hotelInfo?.id} />
					<HotelReviewNumber id={hotelInfo?.id} />
				</div>
				<div className="flex gap-2 items-center">
					<span className="bg-yellow-300 p-1 rounded-md">
						{hotelInfo?.propertyCategory} Star Property
					</span>
					{hotelInfo?.isBooked && (
						<span className="inline-block bg-green-300/45 text-green-600 rounded-md p-1 font-bold">
							Booked
						</span>
					)}
				</div>
			</div>

			<div className="flex flex-col gap-2 items-end justify-center">
				<h2 className="text-2xl font-bold text-right">
					$
					{(hotelInfo?.highRate ? hotelInfo?.highRate : 0) +
						(hotelInfo?.lowRate ? hotelInfo?.lowRate : 0) / 2}
					/night
				</h2>
				<p className=" text-right">Per Night for 1 Room</p>
				{fromListPage ? (
					<Link
						href={`/hotels/${hotelInfo?.id}?${params}`}
						className="btn-primary "
					>
						Details
					</Link>
				) : (
					<Link
						href={`/hotels/${hotelInfo?.id}/payment?${params}`}
						className="btn-primary "
					>
						Book
					</Link>
				)}
			</div>
		</>
	);
};

export default HotelSummaryInfo;
