import Gallery from "@/components/modules/hotel/details/Gallery";
import Overview from "@/components/modules/hotel/details/Overview";
import Summary from "@/components/modules/hotel/details/Summary";
import { getHotelDetailsById } from "@/queries/hotels";

interface IParams {
	hotelId: string;
}
interface ISearchParams {
	checkIn: string;
	checkOut: string;
}

interface IProps {
	params: IParams;
	searchParams: ISearchParams;
}

const HotelDetailsPage = async ({
	params: { hotelId },
	searchParams: { checkIn, checkOut },
}: IProps) => {
	const hotelDetails = await getHotelDetailsById(hotelId, checkIn, checkOut);

	return (
		<>
			<Summary hotelInfo={hotelDetails} checkIn={checkIn} checkOut={checkOut} />
			<Gallery gallery={hotelDetails.gallery!} />
			<Overview overview={hotelDetails.overview!} />
		</>
	);
};

export default HotelDetailsPage;
