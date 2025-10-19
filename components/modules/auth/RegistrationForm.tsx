"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const RegistrationForm = () => {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		try {
			const formData = new FormData(e.currentTarget);
			const firstName = formData.get("fname") as string;
			const lastName = formData.get("lname") as string;
			const email = formData.get("email") as string;
			const password = formData.get("password") as string;

			const payload = {
				firstName,
				lastName,
				email,
				password,
			};
			const response = await fetch("/api/auth/register", {
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!response.ok) {
				throw new Error("Failed to register");
			}
			router.push("/login");
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unexpected error occurred");
			}
		}
	};

	return (
		<>
			{error && <div className="text-xl text-red-500 text-center">{error}</div>}
			<form className="login-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="fname">First Name</label>
					<input type="text" name="fname" id="fname" />
				</div>

				<div>
					<label htmlFor="lname">Last Name</label>
					<input type="text" name="lname" id="lname" />
				</div>

				<div>
					<label htmlFor="email">Email Address</label>
					<input type="email" name="email" id="email" />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>

				<button type="submit" className="btn-primary w-full mt-4">
					Create account
				</button>
			</form>
		</>
	);
};

export default RegistrationForm;
