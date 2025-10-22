import { IBookingDoc } from "@/models/bookingModel";
import BookingCard from "../../booking/BookingCard";

interface IProps {
	upcomingBookings: IBookingDoc[];
}

const UpcomingBooking = ({ upcomingBookings }: IProps) => {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

			{upcomingBookings &&
				upcomingBookings.length > 0 &&
				upcomingBookings.map((booking) => (
					<div
						id={booking.id}
						key={booking.id}
						className="bg-[#ebf6e9] p-4 rounded-md"
					>
						<BookingCard
							hotelId={booking.hotelId.toString()}
							checkIn={booking.checkIn}
							checkOut={booking.checkOut}
						/>
					</div>
				))}
		</div>
	);
};

export default UpcomingBooking;
