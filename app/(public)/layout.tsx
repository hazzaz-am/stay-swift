import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import { connectDB } from "@/services/mongo";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Stay Swiftly",
	description:
		"Stay Swiftly - Your go-to app for swift and efficient stay action planning.",
};

export default async function RootLayout({
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
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
