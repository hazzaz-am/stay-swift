import { auth } from "@/auth";
import ProfileInfo from "@/components/modules/user/ProfileInfo";
import PastBooking from "@/components/modules/user/booking/PastBooking";
import UpcomingBooking from "@/components/modules/user/booking/UpcomingBooking";
import { getBookingsByUser } from "@/queries/bookings";
import { getLoggedInUserByEmail } from "@/queries/hotels";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Bookings | Stay Swiftly",
};

const BookingsPage = async () => {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}

	const loggedInUser = await getLoggedInUserByEmail(
		session.user?.email as string
	);
	const bookings = await getBookingsByUser(loggedInUser.id);

	const pastBookings = bookings.filter((booking) => {
		return new Date().getTime() > new Date(booking.checkIn).getTime();
	});

	const upcomingBookings = bookings.filter((booking) => {
		return new Date().getTime() < new Date(booking.checkOut).getTime();
	});

	return (
		<>
			<section className="mt-[100px]">
				<div className="container">
					<ProfileInfo />
				</div>
			</section>
			<section>
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<PastBooking pastBookings={pastBookings} />
						<UpcomingBooking upcomingBookings={upcomingBookings} />
					</div>
				</div>
			</section>
		</>
	);
};

export default BookingsPage;
