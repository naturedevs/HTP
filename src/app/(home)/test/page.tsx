'use client';
// import Image from "next/image";
// import { url } from "inspector";
// import { useState } from 'react';
import { Stripe, loadStripe } from '@stripe/stripe-js';

export default function TestPage() {

	
	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("payment submitted");

		// const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


		// const { clientSecret } = await fetch('/api/test', {
		// 	 method: 'POST',
		// 	 headers: { 'Content-Type': 'application/json' },
		// 	 body: JSON.stringify({ amount: 1000, currency: 'usd' }),
		// }).then((res) => res.json());

		// const result = await stripe.confirmCardPayment(clientSecret, {
		// 	payment_method: {
		// 		card: elements.getElement(CardElement),
		// 	},
		// });

		// if (result.error) {
		// 	console.log(`Payment failed: ${result.error.message}`);
		// } else if (result.paymentIntent.status === 'succeeded') {
		// 	console.log('Payment succeeded!');
		// }

  	};

	return (
		<>
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
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "First name"
								/>
								<input type="text" 
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Last name"
								/>
								<input type="text" 
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Email address"
								/>
								<input type="text" 
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
								<input type="text" 
									className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
									placeholder = "Card Number"
								/>
								<div className="flex space-x-2">
									<input type="text" 
										className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
										placeholder = "CVC"
									/>
									<input type="text" 
										className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
										placeholder = "Monthly/year expire"
									/>	
								</div>
							</div>
						</div>

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
			
		</>
	);
}
