
import Image from "next/image";
import "./page.css"

export default function MediaPage() {
	return (
		<>
			<div className="w-full h-[410px] bg-gradient-to-r from-[#34A853] via-50% via-[#77C574] to-[#34A853] flex">
				{/* <div className="banner opacity-30 absolute top-0 left-0 right-0 bottom-0 md:h-[410px] h-full"></div> */}
				<div className="max-w-[1280px] flex w-full mx-auto justify-between">
					<div className="flex-1 items-center flex">
						<div className="space-y-5">
							<p className="font-[800] lg:text-[80px] lg:leading-[80px] text-white">MEDIA</p>
							<div className="flex">
								<p className="font-[400] lg:text-[18px] lg:leading-[18px] text-white">Home</p>
								<Image
									className="mx-1"
									src="/arrow.svg"
									alt=""
									width={10}
									height={10}
								/>
								<p className="font-[400] lg:text-[18px] lg:leading-[18px] text-white">Media</p>
							</div>
						</div>
					</div>
					<Image
						src="/media_girl.svg"
						alt=""
						width={450}
						height={409}
					/>
				</div>
			</div>
			<div>
				This is content part.
			</div>
		</>
	);
}
