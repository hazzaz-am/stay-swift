import { IBookingDoc } from "@/models/bookingModel";
import BookingCard from "../../booking/BookingCard";

interface IProps {
	pastBookings: IBookingDoc[];
}

const PastBooking = ({ pastBookings }: IProps) => {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
			{pastBookings &&
				pastBookings.length > 0 &&
				pastBookings.map((booking) => (
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

export default PastBooking;
