import FilterByAmenities from "../filter/FilterByAmenities";
import FilterByCategory from "../filter/FilterByCategory";
import FilterByPriceRange from "../filter/FilterByPriceRange";
import PricingSort from "../sort/PricingSort";

const Filter = () => {
	return (
		<>
			<div className="col-span-3 space-y-4">
				<PricingSort />
				<FilterByPriceRange />
				<FilterByCategory />
				<FilterByAmenities />
			</div>
		</>
	);
};

export default Filter;
