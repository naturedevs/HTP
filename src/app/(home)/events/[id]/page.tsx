'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import moment from 'moment';

export default function EventItem() {
	
	const month = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Sep', 'Nob', 'Dec'];
    const day = ['Sun', 'Mon', 'Thu', 'Wed', 'Thi', 'Fri', 'Sat']

	const {id} = useParams();
	const [event, setEvent] = useState({});
	const [tTypes, setTTypes] = useState([]);
	const [tType, setTType] = useState(null);
	const [quentity, setQuentity] = useState(0);

	const getEvent = async () => {
		
		try{
			const response = await fetch('/api/events/getEvent', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id: id}),
			});
			if(response.status === 200) {
				const data = await response.json();
				setEvent(data);
				console.log(data)
			} else {
				console.log('error');
			}
		} catch(err){
			console.log(err, '---------------------')
		}
	}

	const getTicketTypes = async () => {
		try {
			const response = await fetch('/api/events/getTicketTypes');
			if (response.ok) {
				const data = await response.json();
				setTTypes(data);
				
			} else {
				console.log('error');
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getEvent();
		getTicketTypes();
	}, []);

	const handleSubmit = async (e) => {		
	
  	};

	return (

			<form onSubmit={handleSubmit}>
				

				<div className="w-full bg-[#F5F5F5] flex">

					<div className="max-w-[1280px] w-full mx-auto md:flex">

						<div className="flex-1">
							<div className="bg-white m-5 p-5 space-y-3">
								<div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: event.img_file }}></div>
								<p className="md:font-[500] md:text-[24px] md:leading-[24px] font-[500] text-[24px] leading-[24px] text-black line-clamp-2">{event.name}</p>
								<p className="text-[#777777] text-[14px] leading-[14px]">{month[parseInt(moment(event.date).format('MM'))]} {moment(event.date).format('DD')} {day[(new Date(event.date)).getDay()]} {' - ' + moment(event.date).format('hh:mm A')}</p>
								<div className="text-[#777777] text-[14px] leading-[14px] grid grid-cols-4">
									<p className='grid text-[16px] font-[700] text-[#121212]'>DJ:</p>
									<p className='grid col-span-3'>{event.dj_name}</p>
								</div>
								<div className="text-[#777777] text-[14px] leading-[14px] grid grid-cols-4">
									<p className='grid text-[16px] font-[700] text-[#121212]'>Venue:</p>
									<p className='grid col-span-3'>{event.venue_name}</p>
								</div>
								<div className="text-[#777777] text-[14px] leading-[14px] grid grid-cols-4">
									<p className='grid text-[16px] font-[700] text-[#121212]'>Address:</p>
									<p className='grid col-span-3'>{event.venue_addr}</p>
								</div>
								<p className="text-[#272727] text-[14px] leading-[18px] line-clamp-3">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>

							</div>

						</div>
						<div className='flex-1'>
							<div className="bg-white m-5 p-5 space-y-3">
								<h1 className='font-[700] text-[30px]'>Choose your ticket & Quantity</h1>
								<p>Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.</p>
								<select value={tType} defaultValue={""} onChange={e => setTType(e.target.value)} className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]">
										<option value="" className="text-[#3D3D3D]">Choose Tikect Type</option>
										{tTypes && tTypes.map((type, index) => (
											<option value={type.id} key={index}>{type.name}</option>
										))}
									</select>
								<input type="text" placeholder="Choose Ticket Quentity" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" onChange={(e) => setQuentity(parseInt(e.target.value))}/>
								<button type="submit" className="w-full text-white bg-[#34A853] py-[27px] px-[40px] rounded-[4px] ml-[5px] text-[17px]" >BUY TICKET NOW</button>
							</div>
						</div>

					</div>

				</div>

			</form>
			
	);
}
