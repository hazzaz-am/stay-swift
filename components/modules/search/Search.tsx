"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState } from "react";

interface ISearchByFilter {
	destination: string;
	checkIn: string;
	checkOut: string;
}

interface IProps {
	fromList: boolean;
	destination?: string;
	checkIn?: string;
	checkOut?: string;
}

const Search = ({ fromList, destination, checkIn, checkOut }: IProps) => {
	const [searchByFilter, setSearchByFilter] = useState<ISearchByFilter>({
		destination: destination || "Puglia",
		checkIn: checkIn || "",
		checkOut: checkOut || "",
	});
	const [isSearchActive, setIsSearchActive] = useState<boolean>(true);
	const searchParams = useSearchParams();
	const pathName = usePathname();
	const { replace } = useRouter();

	const handleInputs = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const name = e.target.name;
		const value = e.target.value;
		const newSearchByFilter = { ...searchByFilter, [name]: value };

		if (
			new Date(newSearchByFilter.checkIn).getTime() >
			new Date(newSearchByFilter.checkOut).getTime()
		) {
			setIsSearchActive(false);
		} else {
			setIsSearchActive(true);
		}

		setSearchByFilter(newSearchByFilter);
	};

	const doSearch = () => {
		const params = new URLSearchParams(searchParams);
		params.set("destination", searchByFilter?.destination || "all");

		if (searchByFilter?.checkIn && searchByFilter?.checkOut) {
			params.set("checkIn", searchByFilter?.checkIn);
			params.set("checkOut", searchByFilter?.checkOut);
		}

		if (pathName.includes("hotels")) {
			replace(`${pathName}?${params.toString()}`);
		} else {
			replace(`${pathName}hotels?${params.toString()}`);
		}
	};

	return (
		<>
			<div className="lg:max-h-[250px] mt-6">
				<div id="searchParams" className={fromList ? "!shadow-none" : ""}>
					<div>
						<span>Destination</span>
						<h4 className="mt-2">
							<select
								name="destination"
								id="destination"
								value={searchByFilter.destination}
								onChange={handleInputs}
							>
								<option value="Puglia">Puglia</option>
								<option value="London">London</option>
								<option value="Catania">Catania</option>
								<option value="Palermo">Palermo</option>
								<option value="Frejus">Frejus</option>
								<option value="Paris">Paris</option>
							</select>
						</h4>
					</div>

					<div>
						<span>Check in</span>
						<h4 className="mt-2">
							<input
								type="date"
								name="checkIn"
								id="checkIn"
								value={searchByFilter.checkIn}
								onChange={handleInputs}
							/>
						</h4>
					</div>

					<div>
						<span>Checkout</span>
						<h4 className="mt-2">
							<input
								type="date"
								name="checkOut"
								id="checkOut"
								value={searchByFilter.checkOut}
								onChange={handleInputs}
							/>
						</h4>
					</div>
				</div>
			</div>

			<button
				onClick={doSearch}
				disabled={!isSearchActive}
				className="search-btn"
			>
				🔍️ {fromList ? "Modify Search" : "Search"}
			</button>
		</>
	);
};

export default Search;
