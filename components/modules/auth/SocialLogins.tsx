"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({ mode = "login" }: { mode: string }) => {
	const handleGoogleLogin = async () => {
		await signIn("google", { callbackUrl: "http://localhost:3000" });
	};

	const handleFacebookLogin = async () => {
		await signIn("facebook", { callbackUrl: "http://localhost:3000" });
	};
	return (
		<>
			<div className="text-center text-xs text-gray-500">
				{mode === "register" ? (
					<Link className="underline" href="/login">
						Login
					</Link>
				) : (
					<Link className="underline" href="/registration">
						Register
					</Link>
				)}{" "}
				or Signup with
			</div>
			<div className="flex gap-4">
				<button
					onClick={handleFacebookLogin}
					className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
				>
					<Image src="/fb.png" alt="facebook" width={20} height={20} />
					<span>Facebook</span>
				</button>
				<button
					onClick={handleGoogleLogin}
					className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
				>
					<Image src="/google.png" alt="google" width={20} height={20} />
					<span>Google</span>
				</button>
			</div>
		</>
	);
};

export default SocialLogins;
