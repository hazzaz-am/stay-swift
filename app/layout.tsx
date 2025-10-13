import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Stay Swiftly",
	description:
		"Stay Swiftly - Your go-to app for swift and efficient stay action planning.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
