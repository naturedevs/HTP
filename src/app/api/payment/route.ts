
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { NextResponse } from "next/server";
import supabase from '@/supabase/supabaseClient';

export async function GET(req) {

	return NextResponse.json({ messsage: "Hello World" });
}

export async function POST(request: Request) {

	const req = await request.json();
	const ticket_type = req.type;
	const quantity = req.quantity;
	const paymentMethodId  = req.paymentMethodId;

	try{
        const {data, error}  = await supabase
			.from('tickets')
			.select(`*, ticket_type_list(*))`)
			.eq('id', ticket_type)
			.single(); 
		const {cnt, limit_cnt, price} = <any>data
		if(cnt < req.quantity) throw('Stock is not sufficient!');
	    if(req.quantity > limit_cnt) throw('The quantity is greater than allowed count!');

		const paymentIntent = await stripe.paymentIntents.create({
			amount: (price * quantity) * 100, // amount in cents
			currency: 'usd',
			payment_method: paymentMethodId.id,
			confirmation_method: 'manual',
			confirm: true,
			return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/media`,
		});
		await supabase
			.from('tickets')
			.update({cnt: cnt - quantity})
			.eq('id', ticket_type);
			
		return NextResponse.json(paymentIntent);

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
