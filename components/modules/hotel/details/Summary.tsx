import { IHotel } from "@/models/hotelModel";
import HotelSummaryInfo from "../HotelSummaryInfo";

interface IProps {
	hotelInfo: Partial<IHotel>;
	checkIn: string;
	checkOut: string;
}

const Summary = ({ hotelInfo, checkIn, checkOut }: IProps) => {
	return (
		<section className="py-4 mt-[100px] ">
			<div className="flex container">
				<HotelSummaryInfo
					fromListPage={true}
					hotelInfo={hotelInfo}
					checkIn={checkIn}
					checkOut={checkOut}
				/>
			</div>
		</section>
	);
};

export default Summary;
