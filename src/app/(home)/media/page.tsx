
import Image from "next/image";
import "./page.css"
import MediaItem from "@/components/home/mediaItem";
import { MenuItem } from "@material-tailwind/react";
import MediaCategory from "@/components/home/mediaCategory";

export default function MediaPage() {
	return (
		<>
			{/* banner start */}
			<div className="md:w-full md:h-[410px] w-full h-[274px] bg-gradient-to-r from-primaryColor via-50% via-[#77C574] to-primaryColor flex">
				<div className="max-w-[1280px] flex w-full mx-auto justify-between relative px-[15px]">
					<div className="flex-1 items-center flex z-10">
						<div className="space-y-5">
							<p className="md:font-[800] md:text-[80px] md:leading-[80px] font-[700] text-[36px] leading-[80px] text-white">MEDIA</p>
							<div className="md:flex hidden">
								<p className="font-[400] md:text-[18px] md:leading-[18px] text-white">Home</p>
								<Image
									className="mx-1"
									src="/arrow.svg"
									alt=""
									width={10}
									height={10}
								/>
								<p className="font-[400] md:text-[18px] md:leading-[18px] text-white">Media</p>
							</div>
						</div>
					</div>
					<Image
						src="/media_girl.svg"
						alt=""
						width={450}
						height={409}
						className="md:w-[450px] md:h-[409px] w-[258px] h-[235px] absolute bottom-0 right-[15px] z-0"
					/>
				</div>
			</div>
			{/* banner end */}

			<div className="w-full">
				<div className="max-w-[1280px] w-full flex flex-col mx-auto px-[15px] md:mt-12 mt-6">
					
					<div className="w-full flex flex-col items-center md:items-start">	
						<div className="h-full flex space-x-2">
							<div className="flex items-center">
								<hr className="md:w-[139px] w-[84px] border-t-1 border-primaryColor"/>
							</div>
							<p className="md:font-[600] md:text-[18px] md:leading-[18px] font-[600] text-[14px] leading-[18px] text-primaryColor">HOUSETHEPARTY</p>
						</div>
						<div className="mt-2 md:mt-3">
							<p className="md:font-[700] md:text-[37px] md:leading-[49px] font-[700] text-[22px] leading-[27px] text-black">In the Media</p>
						</div>
					</div>

					<div className="w-full md:flex md:space-x-4 mt-5 mb-5">
						
						<div className="flex-1">
							<div className="grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-3">
								<MediaItem></MediaItem>
								{/* <MediaItem></MediaItem>
								<MediaItem></MediaItem>
								<MediaItem></MediaItem>
								<MediaItem></MediaItem>
								<MediaItem></MediaItem> */}
							</div>
						</div>

						<div className="md:w-[307px] w-full md:mt-0 mt-3">

							<p className="md:font-[500] md:text-[21px] md:leading-[21px] font-[500] text-[17px] leading-[49px] text-black">Search</p>
							
							<div className="w-full">

								<input type="text" 
									className="w-full md:h-[58px] h-[45px] border-2 border-gray-300 rounded-[25.5px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3 mb-3"
									placeholder = "Enter Key Word"
								/>

								<div className="bg-white border-gray-300 border-2 rounded-[13px]">
									<div className="p-5">
										<p className="md:font-[500] md:text-[21px] md:leading-[21px] font-[500] text-[17px] leading-[17px] text-black">Category</p>
									</div>
									<hr className="w-full border-t-2 border-gray-300"/>
									<div className="w-full space-y-3 p-5">
										<MediaCategory></MediaCategory>
										<MediaCategory></MediaCategory>
										<MediaCategory></MediaCategory>
										<MediaCategory></MediaCategory>
										<MediaCategory></MediaCategory>
										<MediaCategory></MediaCategory>
									</div>	
								</div>

								<div className="bg-white border-gray-300 border-2 rounded-[13px] mt-3">
									<div className="p-5">
										<p className="md:font-[500] md:text-[21px] md:leading-[21px] font-[500] text-[17px] leading-[17px] text-black">Keywords</p>
									</div>
									{/* <hr className="w-full border-t-2 border-gray-300"/>	 */}
								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

			

			
		</>
	);
}
