
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { NextResponse } from "next/server";

export async function GET(req) {

	return NextResponse.json({ messsage: "Hello World" });
}

export async function POST(request: Request) {

	const req = await request.json();
	const amount = req.amount;
	const currency = req.currency;
	const paymentMethodId  = req.paymentMethodId;

	try{

		const paymentIntent = await stripe.paymentIntents.create({
			amount: 1000, // amount in cents
			currency: 'usd',
			payment_method: paymentMethodId,
			confirmation_method: 'manual',
			confirm: true,
			return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/media`,
		});

		// res.status(200).json(paymentIntent);
		return NextResponse.json(paymentIntent);

		// const paymentIntent = await stripe.paymentIntents.create({
		// 	amount,
		// 	currency,
		// });

		// return NextResponse.json({ messsage: req.currency });
	}
	catch(error){
		return NextResponse.json({ error });
	}

	
}

// export default async function handler(req, res) {
// 	if (req.method === 'POST') {
		
// 		const { amount, currency } = req.body;

// 		try {
// 			const paymentIntent = await stripe.paymentIntents.create({
// 				amount,
// 				currency,
// 			});

// 			// res.status(200).json({ clientSecret: paymentIntent.client_secret });
// 			res.status(200).json({ msg: "success" });
			
// 		} catch (error) {
// 			res.status(500).json({ error: error.message });
// 		}
// 	} else {
// 		res.setHeader('Allow', 'POST');
// 		res.status(405).end('Method Not Allowed');
// 	}
// }
