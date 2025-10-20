import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "../modules/auth/Logout";

const Navbar = async () => {
	const session = await auth();
	return (
		<nav>
			<Link href="/">
				<Image
					src="/stayswift.svg"
					alt="Stay Swift Logo"
					width={200}
					height={200}
				/>
			</Link>

			<ul>
				<li>
					<Link href="/hotels">Hotels</Link>
				</li>

				<li>
					<Link href="/about-us">About Us</Link>
				</li>

				<li>
					<Link href="/contact-us">Contact us</Link>
				</li>

				<li>
					<Link href="/bookings">Bookings</Link>
				</li>

				<li>
					{session?.user ? (
						<div>
							<span className="mx-1"> {session?.user?.name} </span>
							<span> | </span>
							<Logout />
						</div>
					) : (
						<Link href="/login" className="login">
							Login
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
