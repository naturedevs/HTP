'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function EventItem() {
	
	const {id} = useParams();
	const [event, setEvent] = useState(null);

	const getEvent = async () => {
		
		try{
			const response = await fetch('api/events/getEvent', {
				body: JSON.stringify({id: id})
			});
			if(response.status === 200) {
				const data = response.json();
				setEvent(data);
			} else {
				console.log('error');
			}
		} catch(err){
			console.log(err)
		}
	}

	useEffect(() => {
		getEvent();
	}, []);

	const handleSubmit = async (e) => {		
	
  	};

	return (

			<form onSubmit={handleSubmit}>
				

				<div className="w-full bg-[#F5F5F5] flex">

					<div className="max-w-[1280px] w-full mx-auto md:flex">

						<div className="flex-1">
							<div className="bg-white m-5 p-5 space-y-3">
								<div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: "url('/test.png')" }}></div>
								<p className="md:font-[500] md:text-[24px] md:leading-[24px] font-[500] text-[24px] leading-[24px] text-black line-clamp-2">Empower Federal Credit Union Amphitheater at Lakeview</p>
								<p className="text-[#777777] text-[14px] leading-[14px]">Jun 7 Wed 7:00 PM</p>
								<p className="text-[#777777] text-[14px] leading-[14px]">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
								<p className="text-[#272727] text-[14px] leading-[18px] line-clamp-3">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
								<hr className="w-full border-[1px] border-[#E8E8E8]"/>
								<div className="flex mx-auto justify-between">
									<p className="text-[#272727] text-[14px] leading-[18px]">Total Cost:</p>
									<p className="text-primaryColor font-[800] text-[25px] leading-[18px]">$25</p>
								</div>
							</div>

							<div className="pr-5 pl-5">
								<button type="submit" className="w-full md:h-[54px] h-[45px] bg-primaryColor text-[17px] text-[#FFFFFF]">
									COMPLETE ORDER
								</button>
							</div>
						</div>

					</div>

				</div>

			</form>
			
	);
}
