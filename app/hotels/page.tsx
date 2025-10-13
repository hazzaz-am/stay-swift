import Image from "next/image";

export default function HotelListPage() {
	return (
		<>
			{/* <!-- Search Modify Area --> */}
			<section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
				<div className="container items-center py-12 ">
					<div className="lg:max-h-[250px] ">
						<div id="searchParams" className="!shadow-none">
							{/* <!--Location  --> */}
							<div>
								<span>Destination</span>
								<h4 className="mt-2">
									<select name="destination" id="destination">
										<option value="Bali">Bali</option>
										<option value="Cox's Bazar">Cox&apos;s Bazar</option>
										<option value="Sylhet">Sylhet</option>
										<option value="Saint Martin">Saint Martin</option>
										<option value="Bali">Bali</option>
									</select>
								</h4>
							</div>

							{/* <!-- Guests --> */}
							<div>
								<span>Check in</span>
								<h4 className="mt-2">
									<input type="date" name="checkin" id="checkin" />
								</h4>
							</div>

							{/* <!-- Check in --> */}
							<div>
								<span>Checkout</span>
								<h4 className="mt-2">
									<input type="date" name="checkout" id="checkout" />
								</h4>
							</div>

							{/* <!-- Search Button --> */}
							<div>
								<button className="search-btn w-fit translate-x-0 translate-y-0">
									🔍️ Modify Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Search Result Area --> */}
			<section className="py-12">
				<div className="container grid grid-cols-12">
					<div className="col-span-3 space-y-4">
						{/* <!-- Sort By Price --> */}
						<div>
							<h3 className="font-bold text-lg">Sort By</h3>
							<form action="" className="flex flex-col gap-2 mt-2">
								<label htmlFor="highToLow">
									<input type="checkbox" name="highToLow" id="highToLow" />
									Price High to Low
								</label>

								<label htmlFor="lowToHigh">
									<input type="checkbox" name="lowToHigh" id="lowToHigh" />
									Price Low to high
								</label>
							</form>
						</div>

						{/* <!-- Price Range --> */}
						<div>
							<h3 className="font-bold text-lg">Price Range</h3>
							<form action="" className="flex flex-col gap-2 mt-2">
								<label htmlFor="range1">
									<input type="checkbox" name="range1" id="range1" />$ 13 - $ 30
								</label>

								<label htmlFor="range2">
									<input type="checkbox" name="range2" id="range2" />$ 30 - $ 60
								</label>

								<label htmlFor="range3">
									<input type="checkbox" name="range3" id="range3" />$ 60 - $ 97
								</label>

								<label htmlFor="range4">
									<input type="checkbox" name="range4" id="range4" />$ 97 - $
									152
								</label>

								<label htmlFor="range5">
									<input type="checkbox" name="range5" id="range5" />$ 152 - $
									182
								</label>

								<label htmlFor="range6">
									<input type="checkbox" name="range6" id="range6" />$ 182+
								</label>
							</form>
						</div>

						{/* <!-- Star Category --> */}
						<div>
							<h3 className="font-bold text-lg">Star Category</h3>
							<form action="" className="flex flex-col gap-2 mt-2">
								<label htmlFor="fiveStar">
									<input type="checkbox" name="fiveStar" id="fiveStar" />5 Star
								</label>

								<label htmlFor="fourStar">
									<input type="checkbox" name="fourStar" id="fourStar" />4 Star
								</label>

								<label htmlFor="threeStar">
									<input type="checkbox" name="threeStar" id="threeStar" />3
									Star
								</label>

								<label htmlFor="twoStar">
									<input type="checkbox" name="twoStar" id="twoStar" />2 Star
								</label>

								<label htmlFor="oneStar">
									<input type="checkbox" name="oneStar" id="oneStar" />1 Star
								</label>
							</form>
						</div>

						{/* <!-- Amenities --> */}
						<div>
							<h3 className="font-bold text-lg">Amenities</h3>
							<form action="" className="flex flex-col gap-2 mt-2">
								<label htmlFor="wifi">
									<input type="checkbox" name="wifi" id="wifi" />
									Wi-fi
								</label>

								<label htmlFor="swimmingPool">
									<input
										type="checkbox"
										name="swimmingPool"
										id="swimmingPool"
									/>
									Swimming Pool
								</label>
							</form>
						</div>
					</div>
					<div className="col-span-9">
						{/* <!-- Card Container --> */}
						<div className="space-y-4">
							<div className="flex gap-6 border border-gray/20 p-4 rounded-md">
								<Image
									src="/images/image-1.png"
									className="max-h-[162px] max-w-[240px]"
									alt=""
									width="162"
									height="240"
								/>
								<div className="flex-1">
									<h2 className="font-bold text-lg">
										Effotel By Sayaji Jaipur
									</h2>
									<p>📍 Kolkata</p>
									<div className="flex gap-2 items-center my-4">
										<div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
											5.3
										</div>
										<span className="font-medium">Very Good</span>
										<span>232 Reviews</span>
									</div>
								</div>

								<div className="flex flex-col gap-2 items-end justify-center">
									<h2 className="text-2xl font-bold text-right">$124/night</h2>
									<p className=" text-right">Per Night for 4 Rooms</p>
									<button className="btn-primary ">Details</button>
								</div>
							</div>

							<div className="flex gap-6 border border-gray/20 p-4 rounded-md">
								<Image
									src="/images/image-1.png"
									className="max-h-[162px] max-w-[240px]"
									alt=""
									width="162"
									height="240"
								/>
								<div className="flex-1">
									<h2 className="font-bold text-lg">
										Effotel By Sayaji Jaipur
									</h2>
									<p>📍 Kolkata</p>
									<div className="flex gap-2 items-center my-4">
										<div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
											5.3
										</div>
										<span className="font-medium">Very Good</span>
										<span>232 Reviews</span>
									</div>
								</div>

								<div className="flex flex-col gap-2 items-end justify-center">
									<h2 className="text-2xl font-bold text-right">$124/night</h2>
									<p className=" text-right">Per Night for 4 Rooms</p>
									<button className="btn-primary ">Details</button>
								</div>
							</div>

							<div className="flex gap-6 border border-gray/20 p-4 rounded-md">
								<Image
									src="/images/image-1.png"
									className="max-h-[162px] max-w-[240px]"
									alt=""
									width="162"
									height="240"
								/>
								<div className="flex-1">
									<h2 className="font-bold text-lg">
										Effotel By Sayaji Jaipur
									</h2>
									<p>📍 Kolkata</p>
									<div className="flex gap-2 items-center my-4">
										<div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
											5.3
										</div>
										<span className="font-medium">Very Good</span>
										<span>232 Reviews</span>
									</div>
								</div>

								<div className="flex flex-col gap-2 items-end justify-center">
									<h2 className="text-2xl font-bold text-right">$124/night</h2>
									<p className=" text-right">Per Night for 4 Rooms</p>
									<button className="btn-primary ">Details</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
