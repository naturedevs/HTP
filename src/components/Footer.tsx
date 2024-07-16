import Image from "next/image";
import "./footer.css";

export default function Footer() {
	return (
		<div className="left-0 bottom-0 w-full pt-10 text-center relative">
			<div className="md:absolute top-0 left-0 right-0 z-10 md:px-[15px] sm:px-0">
				<div className="relative max-w-[1280px] m-auto bg2 xl:h-[505px] lg:rounded-[45px] md:rounded-[45px] sm:rounded-none overflow-hidden">
					<div className="absolute left-0 right-0 top-0 bottom-0 bg-primaryColor opacity-60 lg:rounded-[45px] md:rounded-[45px] sm:rounded-none grid grid-cols-5">
					</div>
					<div className="relative md:px-10 md:grid md:grid-cols-5 md:pt-0 flex-col-reverse flex items-center justify-center pt-10 px-5">
						<Image 
							src="/footer_bg4.svg"
							alt=""
							width={403}
							height={505}
							className="col-span-2 md:w-[403px] md:h-[505px] w-[250px] h-[300px]"
						/>
						<div className="col-span-3 flex items-center content-center">
							<div className="text-left">
								<p className="md:text-[42px] mmd:text-[30px] text-[21px] leading-[31.5px] mmd:leading-[63px] text-[#ffffff] font-bold">Sign Up For Newsletter</p>
								<p className="mmd:text-[15px] mmd:leading-[23px] text-[12px] leading-[20px] text-[#ffffff] mt-3">
								MUSIC CAN CHANGE LIVES. WHETHER YOU ARE HAVING A GOOD OR A BAD DAY, THE POWER OF MUSIC CAN CHANGE YOUR MOOD.
								</p>
								<div className="relative flex justify-between items-center mt-6 bg-white rounded-[4px] lg:h-[67px] h-[45px]">
									<Image
										src="/mail.svg"
										alt=""
										width={20}
										height={20}
										className="col-span-2 mmd:ml-8 ml-5"
									/>
									<input
										type="text"
										className="flex h-10 rounded-md bg-white px-5 py-2 text-sm outline-none"
									/>
									<div className="bg3 content-center mmd:mr-4 mr-2">
										<Image
											src="/send.svg"
											alt=""
											width={16}
											height={15}
											className="col-span-2 ml-3"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>    
			</div>
			<div className="md:top-[253px] bg1 relative px-[15px]">
				<div className="max-w-[1280px] m-auto md:grid md:grid-cols-5 relative md:pt-[260px]">
					<div className="col-span-2 grid md:grid-rows-2 lg:mr-0 mr-5">
					<div className="md:h-[245px] md:my-0 my-8">
						<Image
							src="/logo1.svg"
							alt=""
							width={342}
							height={30}
							className="mmd:w-[342px] mmd:h-[30px] w-[206px] h-[18px]"
						/>
						<p className="md:mt-7 mt-3 text-[#ffffff] text-left mmd:text-[17px] text-[14px] mmd:leading-7 leading-[25px]">
							Technology focused provider of the best parties locally and around the world. Updated daily and sourced from verified venues and promoters. Let's get the party started!
						</p>
						<div className="flex md:mt-7 mt-3 gap-3">
							<Image
								src="/facebook.svg"
								alt=""
								width={23}
								height={23}
							/>
							<Image
								src="/twitter.svg"
								alt=""
								width={20}
								height={20}
							/>
							<Image
								src="/linkedin.svg"
								alt=""
								width={20}
								height={20}
							/>
							<Image
								src="/instant.svg"
								alt=""
								width={20}
								height={20}
							/>
						</div>
					</div>
					</div>
					<div className="col-span-3 grid md:grid-cols-3 grid-cols-2 md:gap-16 gap-5 mmd:text-[17px] text-[14px] mmd:leading-7 leading-[25px]">
					<div>
						<p className="mmd:text-[19px] text-[16px] text-[#ffffff] text-left font-bold">Events by City</p>
						<p className="text-[#ffffff] text-left mt-4 leading-9">
							Atlanta, GA <br/>
							Chicago, IL <br/>
							Boston, MA <br/>
							Las Vegas, NV <br/>
							Los Angeles, CA <br/>
							Miami, FL <br/>
							New York, NY <br/>
							San Francisco, CA <br/>
							Washington, DC <br/>
						</p>
						</div>
						<div>
							<p className="mmd:text-[19px] text-[16px] text-[#ffffff] text-left font-bold">News Categories</p>
							<p className="text-[#34A853] text-left mt-4 leading-9">
								Trending Now
							</p>
							<p className="text-[#ffffff] text-left leading-9">
								Health & Fitness<br/>
								Music & Celebrities<br/>
								Fashion & Style<br/>
								Technology<br/>
								Product Reviews<br/>
								Travel & Events<br/>
							</p>
						</div>
						<div>
							<p className="mmd:text-[19px] text-[16px] text-[#ffffff] text-left font-bold">Resources</p>
							<p className="text-[#ffffff] text-left mt-4 leading-9">
								About Us<br/>
								Advertise Event<br/>
								Contact Us<br/>
								Help Center/FAQ<br/>
								Terms & Conditions<br/>
								Privacy Policy<br/>
							</p>
						</div>
					</div>
				</div>
				<div className="max-w-[1280px] mx-auto mt-5 pb-5 relative flex justify-between flex-col-reverse md:flex-row mmd:text-[17px] text-[14px] mmd:leading-7 leading-[25px]">
					<p className="text-[#FFFFFF]">© 2024 House The Party. All Rights Reserved.</p>
					<div className="flex md:gap-7 gap-1 md:flex-row flex-col">
						<div className="flex gap-7 justify-between">
							<p className="text-[#FFFFFF]">Purchase Policy</p>
							<p className="text-[#FFFFFF]">Privacy Policy </p>
							<p className="text-[#FFFFFF]">Cookie Policy</p>
						</div>
						<div className="flex justify-start">
							<p className="text-[#FFFFFF]">Manage my cookies and ad choices</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
