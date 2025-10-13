export default function BookingsPage() {
	return (
		<>
			<section className="mt-[100px]">
				<div className="container">
					{/* <!-- profile info --> */}
					<div className="flex flex-col items-center py-8 text-center">
						{/* <!-- profile image --> */}
						<div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white">
							S
						</div>
						{/* <!-- name , email --> */}
						<div>
							<h3 className="text-2xl font-semibold lg:text-[28px]">
								Sumit Saha
							</h3>
							<p className="leading-[231%] lg:text-lg">sumitsaha@gmail.com</p>
						</div>

						<div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
					</div>
					{/* <!-- end profile info --> */}
				</div>
			</section>

			<section>
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* <!-- Past Bookings --> */}
						<div className="space-y-4">
							<h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
							{/* <!-- booking card --> */}
							<div className="bg-[#ebf6e9] p-4 rounded-md">
								<div className="flex justify-between items-center ">
									<div>
										<h3 className="text-xl font-semibold">
											Effotel By Sayaji Jaipur
										</h3>
										<div className="text-sm text-gray-600 my-4">
											<p>Check In: 12/12/2021</p>
											<p>Check Out: 14/12/2021</p>
										</div>
									</div>

									{/* <!-- Total Cost --> */}
									<div>
										<h3 className="text-xl font-semibold text-right">$124</h3>
										<p className="text-sm text-gray-600">
											$62 per night x 2 days
										</p>
									</div>
								</div>
							</div>
							{/* <!-- end booking card --> */}

							{/* <!-- booking card --> */}
							<div className="bg-[#ebf6e9] p-4 rounded-md">
								<div className="flex justify-between items-center">
									<div>
										<h3 className="text-xl font-semibold">
											Effotel By Sayaji Jaipur
										</h3>
										<div className="text-sm text-gray-600 my-4">
											<p>Check In: 12/12/2021</p>
											<p>Check Out: 14/12/2021</p>
										</div>
									</div>

									{/* <!-- Total Cost --> */}
									<div>
										<h3 className="text-xl font-semibold text-right">$124</h3>
										<p className="text-sm text-gray-600">
											$62 per night x 2 days
										</p>
									</div>
								</div>
							</div>
							{/* <!-- end booking card --> */}
						</div>

						{/* <!-- Upcomming Bookings --> */}
						<div className="space-y-4">
							<h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>
							{/* <!-- booking card --> */}
							<div className="bg-[#F6F3E9] p-4 rounded-md">
								<div className="flex justify-between items-center ">
									<div>
										<h3 className="text-xl font-semibold">
											Effotel By Sayaji Jaipur
										</h3>
										<div className="text-sm text-gray-600 my-4">
											<p>Check In: 12/12/2021</p>
											<p>Check Out: 14/12/2021</p>
										</div>
									</div>

									{/* <!-- Total Cost --> */}
									<div>
										<h3 className="text-xl font-semibold text-right">$124</h3>
										<p className="text-sm text-gray-600">
											$62 per night x 2 days
										</p>
									</div>
								</div>
							</div>
							{/* <!-- end booking card --> */}

							{/* <!-- booking card --> */}
							<div className="bg-[#F6F3E9] p-4 rounded-md">
								<div className="flex justify-between items-center">
									<div>
										<h3 className="text-xl font-semibold">
											Effotel By Sayaji Jaipur
										</h3>
										<div className="text-sm text-gray-600 my-4">
											<p>Check In: 12/12/2021</p>
											<p>Check Out: 14/12/2021</p>
										</div>
									</div>

									{/* <!-- Total Cost --> */}
									<div>
										<h3 className="text-xl font-semibold text-right">$124</h3>
										<p className="text-sm text-gray-600">
											$62 per night x 2 days
										</p>
									</div>
								</div>
							</div>
							{/* <!-- end booking card --> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
