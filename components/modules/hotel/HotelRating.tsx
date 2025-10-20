import { getRatingsForHotel } from "@/queries/hotels";

export default async function HotelRating({ hotelId }: { hotelId?: string }) {
	const reviews = await getRatingsForHotel(hotelId!);

	const getRatingDescription = (avgRating: number) => {
		if (avgRating === 0) {
			return "No Ratings Available";
		} else if (avgRating > 0 && avgRating <= 2) {
			return "Poor";
		} else if (avgRating > 2 && avgRating <= 3) {
			return "Average";
		} else if (avgRating > 3 && avgRating <= 4) {
			return "Good";
		} else if (avgRating > 4) {
			return "Very Good";
		}
	};

	let avgRating = 0;
	if (reviews.length === 1) {
		avgRating = reviews[0].rating;
	}

	if (reviews.length > 1) {
		const total = reviews.reduce((acc, review) => acc + review.rating, 0);
		avgRating = total / reviews.length;
	}

	return (
		<>
			<div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
				{avgRating.toFixed(1)}
			</div>
			<span className="font-medium">{getRatingDescription(avgRating)}</span>
		</>
	);
}
