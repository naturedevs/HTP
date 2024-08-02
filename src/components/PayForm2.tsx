'use client';
import { useState, useEffect } from 'react';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import {  useStripe, useElements , CardElement} from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import moment from 'moment';

const cardStyle = {
	base: {
		border: '1px solid red',
		iconColor: '#c4f0ff',
		width:'100%',
      color: '#000',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '20px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87BBFD',
      },
	},
	complete: {

	},
	empty: {

	},
	invalid: {

	}
}
export default function TestPage({type, quantity, event_id}) {

	const month = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Sep', 'Nob', 'Dec'];
    const day = ['Sun', 'Mon', 'Thu', 'Wed', 'Thi', 'Fri', 'Sat']

	const router = useRouter();

	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNum, setPhoneNum] = useState("");

	const [isLoding, setLoding] = useState(false);

	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
	const stripe = useStripe();
	const elements = useElements();

	const [event, setEvent] = useState({});
	const getEvent = async () => {
		
		try{
			const response = await fetch('/api/events/getEvent', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id: event_id}),
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
	useEffect(() => {
		getEvent();
	}, []);

	const handleSubmit = async (e) => {
		
		e.preventDefault();
		
		if (!stripe || !elements) {
			return;
		}
        setLoding(true);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
			billing_details: {
				name: firstName + secondName,
				phone: phoneNum,
				email: email, 
			},
		});
		if (error) {
			console.log('card', error)
			return;
		}

		const response = await fetch('/api/payment', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ paymentMethodId: paymentMethod , event_id: event_id, type: type, quantity: quantity}),
		});

		const paymentResponse = await response.json();
		setLoding(false);
		if (paymentResponse.error) {
			return toast.error(paymentResponse.error);
		}
		toast.success(paymentResponse.status)
        router.push('/events/' + event_id);

  	};

	return (

			<form onSubmit={handleSubmit}>
				

				<div className="w-full bg-[#F5F5F5] flex">

					<div className="max-w-[1280px] w-full mx-auto md:flex">

						<div className="flex-1">
							<div className="bg-white m-5 p-5 space-y-3">
								<p className="md:font-[700] md:text-[30px] md:leading-[30px] font-[700] text-[30px] leading-[30px] text-black">Contact Details Form:</p>
								<p className="md:font-[400] md:text-[17px] md:leading-[25px] font-[400] text-[17px] leading-[25px] text-black line-clamp-2">
									Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.
								</p>
								<input type="text" 
								    value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "First name"
								/>
								<input type="text" 
									value={secondName}
									onChange={(e) => setSecondName(e.target.value)}
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Last name"
								/>
								<input type="text" 
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Email address"
								/>
								<input type="text" 
								    value={phoneNum}
									onChange={(e) => setPhoneNum(e.target.value)}
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Phone number"
								/>
								<input type="text" 
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Password"
								/>
							</div>
							
							<div className="bg-white m-5 p-5 space-y-3">
								<p className="md:font-[700] md:text-[30px] md:leading-[30px] font-[700] text-[30px] leading-[30px] text-black">Payment Details Form:</p>
								<p className="md:font-[400] md:text-[17px] md:leading-[25px] font-[400] text-[17px] leading-[25px] text-black line-clamp-2">
									Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.
								</p>
								<input type="text" 
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Name on Card"
								/>
								<div className='border-[2px] border-gray-300 p-3'><CardElement options={{style:cardStyle}}/></div>
							</div>
						</div>

						<div className="flex-1">
							<div className="bg-white m-5 p-5 space-y-3">
								<div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage:event.img_file }}></div>
								<p className="md:font-[500] md:text-[24px] md:leading-[24px] font-[500] text-[24px] leading-[24px] text-black line-clamp-2">{event.name}</p>
								<p className="text-[#777777] text-[14px] leading-[14px]">{month[parseInt(moment(event.date).format('MM'))]} {moment(event.date).format('DD')} {day[(new Date(event.date)).getDay()]} {' - ' + moment(event.date).format('hh:mm A')}</p>
								<p className="text-[#777777] text-[14px] leading-[14px]">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
								<p className="text-[#272727] text-[14px] leading-[18px] line-clamp-3">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
								<hr className="w-full border-[1px] border-[#E8E8E8]"/>
								<div className="flex mx-auto justify-between">
									<p className="text-[#272727] text-[14px] leading-[18px]">Total Cost:</p>
									<p className="text-primaryColor font-[800] text-[25px] leading-[18px]">$50</p>
								</div>
							</div>

							<div className="pr-5 pl-5">
								<button type="submit" className="w-full md:h-[54px] h-[45px] bg-primaryColor text-[17px] text-[#FFFFFF]" disabled={isLoding?true:false}>
									{isLoding? 'PROCESSING...':'COMPLETE ORDER'}
								</button>
							</div>
						</div>

					</div>

				</div>

			</form>
			
	);
}
