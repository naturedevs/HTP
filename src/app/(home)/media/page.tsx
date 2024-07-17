
import Image from "next/image";
import "./page.css"

export default function MediaPage() {
	return (
		<>
			<div className="md:w-full md:h-[410px] w-full h-[274px] bg-gradient-to-r from-[#34A853] via-50% via-[#77C574] to-[#34A853] flex">
				<div className="max-w-[1280px] flex w-full mx-auto justify-between relative px-[15px]">
					<div className="flex-1 items-center flex">
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
						className="md:w-[450px] md:h-[409px] w-[258px] h-[235px] absolute bottom-0 right-[15px]"
					/>
				</div>
			</div>
			{/* <div className="bg-[#F5F5F5] px-15">
				<Image
					src="/house_party.svg"
					alt=""
					width={308}
					height={12}
				/>
			</div> */}
			<div>
				This is content part.
			</div>
		</>
	);
}
