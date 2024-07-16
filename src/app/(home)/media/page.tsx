
import Image from "next/image";

export default function MediaPage() {
	return (
		<div>
			<div className="relative bg-gradient-to-r from-primaryColor via-50% via-[#77C574] to-primaryColor md:h-[409px] h-[274px]">
				<div className="banner opacity-30 absolute top-0 left-0 right-0 bottom-0 md:h-[409px] h-[274px]"></div>
				<div className="absolute top-0 left-0 right-0 bottom-0 flex max-w-[1280px] m-auto justify-between px-4">
					<div className="content-center space-y-5">
						<p className="font-[800] lg:text-[80px] lg:leading-[80px] md:text-[60px] md:leading-[60px] mmd:text-[45px] mmd:leading-[45px] text-[36px] leading-[36px] text-white">MEDIA</p>
						<div className="font-[400] text-[18px] leading-[18px] text-white ml-1 md:flex hidden">
								<p>HOME&nbsp;</p>
								<Image
									src="/arrow.svg"
									alt=""
									width={10}
									height={10}
								/>
								<p>&nbsp;MEDIA</p>
						</div>
					</div>
					<Image
						src="/media_girl.svg"
						alt=""
						width={450}
						height={409}
						className="md:w-[450px] md:h-[409px] w-[219px] h-[274px]"
					/>
				</div>
			</div>
			<div>
				aaa
			</div>
		</div>
	);
}
