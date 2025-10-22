"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function FilterByCategory() {
	const [query, setQuery] = useState<string[]>([]);
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	const handleCheckboxInput = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const name = e.target.name;
		const checked = e.target.checked;

		if (checked) {
			setQuery([...query, name]);
		} else {
			const filteredQuery = query.filter((q) => q !== name);
			setQuery(filteredQuery);
		}
	};

	useEffect(() => {
		const category = params.get("category");

		if (category) {
			const decodedCategory = decodeURI(category);
			const queriesCategory = decodedCategory.split("|");
			setQuery([...queriesCategory]);
		}
	}, []);

	useEffect(() => {
		if (query.length > 0) {
			params.set("category", encodeURI(query.join("|")));
		} else {
			params.delete("category");
		}

		replace(`${pathName}?${params.toString()}`);
	}, [query]);

	return (
		<div>
			<h3 className="font-bold text-lg">Star Category</h3>
			<form action="" className="flex flex-col gap-2 mt-2">
				<label htmlFor="5">
					<input
						type="checkbox"
						name="5"
						id="5"
						onChange={handleCheckboxInput}
            checked={query.includes("5")}
					/>
					5 Star
				</label>

				<label htmlFor="4">
					<input
						type="checkbox"
						name="4"
						id="4"
						onChange={handleCheckboxInput}
            checked={query.includes("4")}
					/>
					4 Star
				</label>

				<label htmlFor="3">
					<input
						type="checkbox"
						name="3"
						id="3"
						onChange={handleCheckboxInput}
            checked={query.includes("3")}
					/>
					3 Star
				</label>

				<label htmlFor="2">
					<input
						type="checkbox"
						name="2"
						id="2"
						onChange={handleCheckboxInput}
            checked={query.includes("2")}
					/>
					2 Star
				</label>

				<label htmlFor="1">
					<input
						type="checkbox"
						name="1"
						id="1"
						onChange={handleCheckboxInput}
            checked={query.includes("1")}
					/>
					1 Star
				</label>
			</form>
		</div>
	);
}
