import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = () => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo fromListPage={true} />
      </div>
    </section>
  );
};

export default Summary;

