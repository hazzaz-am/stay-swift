import { Inter } from "next/font/google";

import "../globals.css";
import { connectDB } from "@/services/mongo";
import Link from "next/link";

const inter = Inter({
	subsets: ["latin"],
});

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	/**
	 * Establish a connection to the database before rendering the layout.
	 */
	await connectDB();
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Link
					href="/"
					className="absolute top-6 left-6 text-gray-500 hover:text-gray-700"
				>
					&larr; Back to Home
				</Link>
				<main>{children}</main>
			</body>
		</html>
	);
}
