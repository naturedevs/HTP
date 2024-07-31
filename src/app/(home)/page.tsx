'use client'
import { useEffect } from "react";
import EventItem from "@/components/home/EventItem";
import MySelect from "@/components/MySelect";
import "@/styles/home.css"
import { NextPageContext } from "next";

Home.getInitialProps = async (ctx: NextPageContext) => {
	console.log('ok')
	const res = await fetch('api/events/getAllEvents')
	return { events: res }
  }

export default function Home() {

	const banner_backImageUrl = '/homeBg1.png';
	const e_type_array = ['Bar', 'Club', 'Warehouse rave', 'Outdoor rave', 'Megaclub', 'Pool', 'Block', 'Rooftop', 'Other'];
	const e_music_array = ['Top 40', 'EDM', 'Pop', 'Rock', 'Techno/House', 'Hip-hop', 'R&B', 'Dubstep', 'Latin', 'Salsa', 'Reggaeton', 'Country', 'Jazz', 'Metal'];
	const e_age_array = ['18+', '21+', '30+', '40+'];


	useEffect(() => {
		console.log('ddddddddddd')
	},[])
	return (
		<>
			{/* banner start */}
			<div className="md:w-full md:h-[839px] w-full h-[531px] bg-cover bg-center" 
				style={{ backgroundImage: `url(${banner_backImageUrl})` }}>
				<div className="max-w-[1280px] w-full h-full mx-auto justify-between px-[15px] flex">
					<div className="flex-1 h-full flex items-center">
						<div className="flex flex-col">
							<div className="flex space-x-2">
								<div className="flex items-center">
									<hr className="md:w-[139px] w-[84px] border-t-1 border-primaryColor"/>
								</div>
								<p className="md:font-[600] md:text-[18px] md:leading-[18px] font-[600] text-[14px] leading-[18px] text-primaryColor">HOUSETHEPARTY</p>
							</div>
							<p className="md:font-[700] md:text-[110px] md:leading-[110px] font-[700] text-[45px] leading-[45px]">
								<span className="text-white">FIND</span>&nbsp;<span className="text-primaryColor">MORE</span><br />
								<span className="text-primaryColor">OF THE</span>&nbsp;<span className="text-white">PARTY</span><br />
								<span className="text-white">NEAR YOU</span>
							</p>
						</div>						
					</div>
					<div className="md:w-[410px] h-full flex items-center">
						<div className="bg-black bg-opacity-50 rounded-[30px] pt-10 pb-10 pl-5 pr-5">
							<p className="md:font-[500] md:text-[21px] md:leading-[30px] font-[500] text-[17px] leading-[25px] text-white line-clamp-3">
								Search parties happening in your city today, tomorrow, and this weekend.
							</p>
							<hr className="w-[42px] border-[3px] border-primaryColor mt-5"/>
							<input type="text" 
								className="w-full md:h-[63px] h-[45px] rounded-[31.5px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pl-5 mt-5"
								placeholder = "Enter City/ZipCode"
							/>
							<input type="text" 
								className="w-full md:h-[63px] h-[45px] rounded-[31.5px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pl-5 mt-5"
								placeholder = "Enter City/ZipCode"
							/>
							<button className="w-full md:h-[63px] h-[45px] rounded-[31.5px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5">
								LET'S GO!
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* banner end */}

			<div className="w-full bg-[#F5F5F5] pt-10 pb-10">
				<div className="max-w-[1280px] w-full mx-auto justify-between px-[15px] flex">

					<div className="w-full flex flex-col items-center md:items-start">	
						
						<div className="h-full flex space-x-2">
							<div className="flex items-center">
								<hr className="md:w-[139px] w-[84px] border-t-1 border-primaryColor"/>
							</div>
							<p className="md:font-[600] md:text-[18px] md:leading-[18px] font-[600] text-[14px] leading-[18px] text-primaryColor">HOUSETHEPARTY</p>
						</div>
						<div className="mt-2 md:mt-3">
							<p className="md:font-[700] md:text-[37px] md:leading-[49px] font-[700] text-[22px] leading-[27px] text-black">Parties Happening Around You Now</p>
						</div>
						<div className="mt-2 md:mt-3">
							<p className="md:font-[400] md:text-[17.5px] md:leading-[18px] font-[400] text-[17.5px] leading-[18px] text-black line-clamp-1">
								Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
							</p>
						</div>

						<div className="mt-2 md:mt-3">
							<MySelect data={e_type_array} placeholder="Type"/>
							<MySelect data={e_music_array} placeholder="Music"/>
							<MySelect data={e_age_array} placeholder="Age"/>
						</div>

						<div className="w-full mt-5">
							<EventItem></EventItem>
							<EventItem></EventItem>
							<EventItem></EventItem>
							<EventItem></EventItem>
							<EventItem></EventItem>
							<EventItem></EventItem>
						</div>

					</div>
				</div>
			</div>



		</>
	);
}

