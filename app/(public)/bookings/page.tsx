import { auth } from "@/auth";
import ProfileInfo from "@/components/modules/user/ProfileInfo";
import PastBooking from "@/components/modules/user/booking/PastBooking";
import UpcomingBooking from "@/components/modules/user/booking/UpcomingBooking";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Bookings | Stay Swiftly",
};

const BookingsPage = async () => {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
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
						<PastBooking />
						<UpcomingBooking />
					</div>
				</div>
			</section>
		</>
	);
};

export default BookingsPage;
