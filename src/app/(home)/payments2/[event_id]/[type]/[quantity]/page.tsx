"use client"
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/PaymentForm';
import PayForm from '@/components/PayForm2';
import { useParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const params = useParams();
  const event_id = parseInt(params.event_id as string);
  const quantity = parseInt(params.quantity as string);
  const type = params.type;
  console.log(params)

  return (
    <Elements stripe={stripePromise}>
      <PayForm event_id={event_id} quantity={quantity} type={type}/>
    </Elements>
  );
};

export default CheckoutPage;