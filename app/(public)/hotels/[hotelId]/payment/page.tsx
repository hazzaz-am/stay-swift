import { auth } from "@/auth";
import PaymentForm from "@/components/modules/payment/PaymentForm";
import { getHotelDetailsById, getLoggedInUserByEmail } from "@/queries/hotels";
import { redirect } from "next/navigation";

interface IProps {
	params: Promise<{
		hotelId: string;
	}>;
	searchParams: Promise<{
		checkIn?: string;
		checkOut?: string;
	}>;
}

const PaymentPage = async (props: IProps) => {
	const { hotelId } = await props.params;
	const searchParams = await props.searchParams;
	const checkIn = searchParams.checkIn || "";
	const checkOut = searchParams.checkOut || "";

	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	const loggedInUser = await getLoggedInUserByEmail(
		session?.user?.email as string
	);
	const hotelInfo = await getHotelDetailsById(hotelId, checkIn, checkOut);
	// Only calculate if we have valid dates
	let totalDays = 0;
	let totalPrice = 0;

	if (checkIn && checkOut) {
		totalDays =
			(new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
				(24 * 60 * 60 * 1000) +
			1;

		const avgRate = ((hotelInfo.highRate || 0) + (hotelInfo.lowRate || 0)) / 2;

		totalPrice = avgRate * totalDays;
	}

	return (
		<section className="container">
			<div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
				<h2 className="font-bold text-2xl">Payment Details</h2>
				<p className="text-gray-600 text-sm">
					You have picked <b>{hotelInfo.name}</b> and total price is{" "}
					<b>${totalPrice}</b> for {totalDays} day(s)
				</p>
				<PaymentForm
					loggedInUser={loggedInUser}
					checkIn={checkIn}
					checkOut={checkOut}
					hotelInfoId={hotelInfo.id!}
					totalPrice={totalPrice}
				/>
			</div>
		</section>
	);
};

export default PaymentPage;
