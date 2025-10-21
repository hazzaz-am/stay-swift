"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface IProps {
	loggedInUser: {
		id: string;
		name: string;
		email: string;
		password: string;
	};
	hotelInfoId: string;
	checkIn: string;
	checkOut: string;
	totalPrice: number
}

const PaymentForm = ({
	loggedInUser,
	checkIn,
	checkOut,
	hotelInfoId,
	totalPrice
}: IProps) => {
	const [error, setError] = useState<null | string>(null);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const form = new FormData(e.currentTarget);
			const hotelId = hotelInfoId;
			const userId = loggedInUser.id;
			const checkIn = form.get("checkIn");
			const checkOut = form.get("checkOut");

			const response = await fetch("/api/auth/payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					hotelId,
					userId,
					checkIn,
					checkOut,
				}),
			});

			if (response.ok) {
				router.push("/bookings");
			}
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("Server error");
			}
		}
	};
	return (
		<>
			{error && (
				<div className="bg-red-600/50 text-red-500 rounded-md p-1">{error}</div>
			)}
			<form className="my-8" onSubmit={handleSubmit}>
				<div className="my-4 space-y-2">
					<label htmlFor="name" className="block">
						Name
					</label>
					<input
						type="text"
						id="name"
						value={loggedInUser.name}
						className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
					/>
				</div>

				<div className="my-4 space-y-2">
					<label htmlFor="email" className="block">
						Email
					</label>
					<input
						type="email"
						id="email"
						value={loggedInUser.email}
						className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
					/>
				</div>

				<div className="my-4 space-y-2">
					<span>Check in</span>
					<h4 className="mt-2">
						<input type="date" name="checkIn" id="checkIn" value={checkIn} />
					</h4>
				</div>

				<div className="my-4 space-y-2">
					<span>Checkout</span>
					<h4 className="mt-2">
						<input type="date" name="checkOut" id="checkOut" value={checkOut} />
					</h4>
				</div>

				<div className="my-4 space-y-2">
					<label htmlFor="card" className="block">
						Card Number
					</label>
					<input
						type="text"
						id="card"
						className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
					/>
				</div>

				<div className="my-4 space-y-2">
					<label htmlFor="expiry" className="block">
						Expiry Date
					</label>
					<input
						type="text"
						id="expiry"
						className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
					/>
				</div>

				<div className="my-4 space-y-2">
					<label htmlFor="cvv" className="block">
						CVV
					</label>
					<input
						type="text"
						id="cvv"
						className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
					/>
				</div>

				<button type="submit" className="btn-primary w-full">
					Pay Now (${`${totalPrice}`})
				</button>
			</form>
		</>
	);
};

export default PaymentForm;
