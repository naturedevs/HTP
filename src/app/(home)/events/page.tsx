'use client'
import "./page.css"
import { useState, useRef, CSSProperties, useEffect } from 'react'
import Image from "next/image";
import { toast } from "react-hot-toast";
import config from '@/config';
import { FaLink, FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import isEmpty from "@/utils/isEmpty";
import DotLoader from "react-spinners/ClipLoader";
import { useRouter } from 'next/navigation';

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	borderColor: "#34A853",
	backgroundColor: '#34A853'

};

function EventPage() {

	const router = useRouter();
	const fileInputRef = useRef(null);
	const [isLoading, setIsLoading] = useState(false);
	const [imgFileName, setImgFileName] = useState("");
	const [imgFile, setImgFile] = useState<File | null>(null);
	const [isTicketForSel, setTicketForSel] = useState<boolean | null>(false);

	const [eventName, setEventName] = useState('');
	const [eventType, setEventType] = useState(null);
	const [musicType, setMusicType] = useState(null);
	const [djName, setDjName] = useState('');
	const [venueName, setVenueName] = useState('');
	const [dressCode, setDressCode] = useState('');
	const [venueType, setVenueType] = useState(null);
	const [venueAddress, setVenueAddress] = useState('');
	const [ageRestrictions, setAgeRestrictions] = useState(null);
	const [coverCharge, setCoverCharge] = useState(0);
	const [eventDate, setEventDate] = useState<string | null>();
	const [eventStart, setEventStart] = useState<string | null>();
	const [eventEnd, setEventEnd] = useState<string | null>();

	const [tickets, setTickets] = useState([]);
	const [ticketType, setTicketType] = useState<string | null>(null);
	const [ticketCount, setTicketCount] = useState('');
	const [ticketPrice, setTicketPrice] = useState('');
	const [ticektLimit, setTicketLimit] = useState('');

	const [eTypes, setETypes] = useState([]);
	const [mTypes, setMTypes] = useState([]);
	const [vTypes, setVTypes] = useState([]);
	const [aTypes, setATypes] = useState([]);
	const [tTypes, setTTypes] = useState([]);

	const getEventTypes = async () => {
		try {
			const response = await fetch('api/events/getEventTypes');
			if (response.ok) {
				const data = await response.json();
				setETypes(data);
				console.log('e_types', data)
			} else {
				console.log('error');
			}
		} catch (err) {
			console.log(err);
		}

	}

	const getMusicTypes = async () => {
		try {
			const response = await fetch('api/events/getMusicTypes');
			if (response.ok) {
				const data = await response.json();
				setMTypes(data);
			} else {
				console.log('error');
			}
		} catch (err) {
			console.log(err);
		}
	}
	const getVenueTypes = async () => {
		try {
			const response = await fetch('api/events/getVenueTypes');
			if (response.ok) {
				const data = await response.json();
				setVTypes(data);
			} else {
				console.log('error');
			}
		} catch (err) {
			console.log(err);
		}
	}
	const getAgeTypes = async () => {
		try {
			const response = await fetch('api/events/getAgeTypes');
			if (response.ok) {
				const data = await response.json();
				setATypes(data);
			} else {
				console.log('error');
			}
		} catch (err) {
			console.log(err);
		}
	}
	const getTicketTypes = async () => {
		try {
			const response = await fetch('api/events/getTicketTypes');
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
		getEventTypes();
		getMusicTypes();
		getVenueTypes();
		getAgeTypes();
		getTicketTypes();
		return (() => { });
	}, []);
	async function onSubmit() {
		try {
			const formData = new FormData();
			let _data = {
				eventName: eventName,
				eventType: eventType,
				musicType: musicType,
				djName: djName,
				venueName: venueName,
				dressCode: dressCode,
				venueType: venueType,
				venueAddress: venueAddress,
				ageRestrictions: ageRestrictions,
				coverCharge: coverCharge,
				eventDate: eventDate,
				eventStart: eventStart,
				eventEnd: eventEnd
			};
			formData.append('main_info', JSON.stringify(_data));
			if (open) formData.append('ticketList', JSON.stringify(tickets));
			if (imgFile) formData.append('imgFile', imgFile);

			setIsLoading(true);
			const response = await fetch("/api/events/createEvent", {
				method: "POST",
				body: formData
			});
			setIsLoading(false);

			if (response.status === 200) {
				const {event_id} = await response.json();
				toast.success("Successful!.");
				router.push('/payments/' + event_id);
			} else {
				console.log('error')
			}
		} catch (error) {
			console.log('ddd')
			toast.error(error.message);
		}
		setIsLoading(false);
	}

	const handleChangeImage = (event: any) => {
		if (event.target.files.length > 0) {
			setImgFile(event.target.files[0]);
			setImgFileName(event.target.value);
		} else {
			setImgFile(null);
			setImgFileName("");
		}
	};
	const addTicketList = () => {
		if (!isEmpty(ticketCount) && !isEmpty(ticketPrice) && !isEmpty(ticketType) && !isEmpty(ticektLimit)) {
			let _item = {
				type: ticketType,
				price: parseInt(ticketPrice),
				count: parseInt(ticketCount),
				limit: parseInt(ticektLimit)
			};
			let _list = [...tickets, _item];
			setTickets(_list);
			setTicketCount('');
			setTicketPrice('');
			setTicketLimit('');
		}
	}
	const removeTicketList = (type: any) => {
		let _list = [...tickets].filter((item, i) => item.type != type);
		setTickets(_list);
	}

	return (
		<div className="sweet-loading">
				<>
					<div className="relative bg-gradient-to-r from-primaryColor via-50% via-[#77C574] to-primaryColor md:h-[409px] h-[274px]">
						<div className="banner opacity-30 absolute top-0 left-0 right-0 bottom-0 md:h-[409px] h-[274px]"></div>
						<div className="absolute top-0 left-0 right-0 bottom-0 flex max-w-[1280px] m-auto justify-between px-4">
							<div className="content-center space-y-5">
								<p className="font-[800] lg:text-[80px] lg:leading-[80px] md:text-[60px] md:leading-[60px] mmd:text-[45px] mmd:leading-[45px] text-[36px] leading-[36px] text-white">LIST YOUR EVENT</p>
								<div className="font-[400] text-[18px] leading-[18px] text-white ml-1 md:flex hidden">
									<p>HOME&nbsp;</p>
									<Image
										src="/arrow.svg"
										alt=""
										width={10}
										height={10}
									/>
									<p>&nbsp;LIST YOUR EVENT</p>
								</div>
							</div>
							<Image
								src="/guitar.svg"
								alt=""
								width={327}
								height={409}
								className="md:w-[327px] md:h-[409px] w-[219px] h-[274px]"
							/>
						</div>
					</div>

					<div className="bg-[#f3f3f6] py-20">
						<div className="max-w-[950px] lg:m-auto mx-4 bg-white pt-10 px-5 rounded-[6px]">
							<div className=" gap-5 pb-5">
								<div>
									<p className="text-[#000000] font-[700] mmd:text-[30px] text-[21px] mb-1">List your event</p>
									<p className="text-[#000000] font-[400] mmd:text-[17px] text-[14px] mmd:mb-6 mb-3">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.</p>
								</div>
								<div className="mmd:grid grid-cols-2 mmd:space-y-0 gap-5 space-y-5 w-full">
									<input value={eventName} onChange={(e) => setEventName(e.target.value)} type="text" placeholder="Event Name" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />
									<input value={eventDate} onChange={(e) => setEventDate(e.target.value)} type="date" placeholder="Event Date" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

									<input value={eventStart} onChange={(e) => setEventStart(e.target.value)} type="time" placeholder="Event Start" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

									<input value={eventEnd} onChange={(e) => setEventEnd(e.target.value)} type="time" placeholder="Event End" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

									<select value={eventType} defaultValue={""} onChange={(e) => setEventType(e.target.value)} className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]">
										<option value="" className="text-[#3D3D3D]">Event Type</option>
										{eTypes && eTypes.map((type, index) => (
											<option value={type.id} key={index}>{type.name}</option>
										))}
									</select>

									<select value={musicType} defaultValue={""} onChange={(e) => setMusicType(e.target.value)} className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]">
										<option value="" className="text-[#3D3D3D]">Music Type</option>
										{mTypes && mTypes.map((type, index) => (
											<option value={type.id} key={index}>{type.name}</option>
										))}
									</select>

									<input value={djName} onChange={(e) => setDjName(e.target.value)} type="text" placeholder="DJ Name" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

									<input value={venueName} onChange={(e) => setVenueName(e.target.value)} type="text" placeholder="Venue Name" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

									<input value={dressCode} onChange={e => setDressCode(e.target.value)} type="text" placeholder="Dress Code" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

									<select value={venueType} defaultValue={""} onChange={e => setVenueType(e.target.value)} className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]">
										<option value="" className="text-[#3D3D3D]">Venue Type</option>
										{vTypes && vTypes.map((type, index) => (
											<option value={type.id} key={index}>{type.name}</option>
										))}
									</select>

								</div>
								<div className="mmd:grid grid-cols-1 mmd:space-y-0 gap-5 space-y-5 w-full">
									<input value={venueAddress} onChange={e => setVenueAddress(e.target.value)} type="text" placeholder="Venue Address" className="mt-5 mb-5 w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

								</div>
								<div className="mmd:grid grid-cols-2 mmd:space-y-0 gap-5 space-y-5 w-full">
									<select value={ageRestrictions} defaultValue={""} onChange={e => setAgeRestrictions(e.target.value)} className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]">
										<option value="" className="text-[#3D3D3D]">Age Restrictions</option>
										{aTypes && aTypes.map((type, index) => (
											<option value={type.id} key={index}>{type.name}</option>
										))}
									</select>

									<input value={coverCharge} onChange={e => setCoverCharge(parseInt(e.target.value))} placeholder="Cover Charge" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" />

								</div>
								<div className="mmd:grid grid-cols-1 mmd:space-y-0 gap-5 space-y-2 w-full mt-5 mb-5">
									<label>
										<input type="checkbox" className="mr-3" onClick={() => setTicketForSel(!isTicketForSel)} />
										Do you want to sell Tickets?
									</label>
									{isTicketForSel && (
										<div className="transition transition-display">

											{tickets.map((ticket, index) => (
												<div className="flex flex-row justify-around gap-3 p-5" key={index}>
													<input type="string" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px] disabled" value={ticket.type} />
													<input type="string" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px] disabled" value={ticket.price} />
													<input type="string" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px] disabled" value={ticket.count} />
													<input type="string" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px] disabled" value={ticket.limit} />
													<button type="button" onClick={() => removeTicketList(ticket.type)}><FaRegSquareMinus /></button>
												</div>
											))}
											<div className="flex flex-row justify-around gap-3 p-5">
												<select defaultValue={""} className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]" value={ticketType} onChange={(e) => setTicketType((e.target.value))}>
													<option value="" className="text-[#3D3D3D]">Ticket Type</option>
													{tTypes && tTypes.map((type, index) => (
														<option value={type.id} key={index}>{type.name}</option>
													))}
												</select>
												<input type="text" placeholder="Ticket Count" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" onChange={(e) => setTicketCount(e.target.value)} value={ticketCount} />
												<input type="text" placeholder="Ticket Price" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" onChange={(e) => setTicketPrice(e.target.value)} value={ticketPrice} />
												<input type="text" placeholder="Ticket Limit" className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px]" onChange={(e) => setTicketLimit(e.target.value)} value={ticektLimit} />
												<button type="button" onClick={addTicketList}><FaRegSquarePlus /></button>
											</div></div>
									)}
									<label>
										<input type="checkbox" className="mr-3" />
										Will there be bottle Services?
									</label>
								</div>
								<div className="mmd:grid grid-cols-1 mmd:space-y-0 gap-5 space-y-2 w-full mb-5">
									<input
										type="file"
										ref={fileInputRef}
										style={{ display: 'none' }}
										onChange={handleChangeImage}
									/>
									<div className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md p-[22px] text-[17px] flex flex-row justify-between" onClick={() => fileInputRef.current.click()}>
										<div>{imgFile ? imgFileName : 'Upload Event Flyer'}</div><div><FaLink /></div>
									</div>
								</div>
								<div className="flex flex-row justify-center mt-5">
									<button type="button" className="w-[206px] text-white bg-[#000000] py-[27px] px-[40px] rounded-[4px] mr-[5px] text-[15px]" onClick={() => alert('ok')}>SAVE FOR LATER</button>
									<button type="button" className="w-[206px] text-white bg-[#34A853] py-[27px] px-[40px] rounded-[4px] ml-[5px] text-[15px]" onClick={onSubmit} disabled={isLoading?true:false}>{isLoading?'PROCESSING...': 'NEXT'}</button>
								</div>
							</div>

						</div>
					</div></>
		</div>
	);
}

export default EventPage;