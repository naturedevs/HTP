"use client"
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/PaymentForm';
import PayForm from '@/components/PayForm';
import { useParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const params = useParams();
  const event_id = parseInt(params.id as string);
  console.log(params)

  return (
    <Elements stripe={stripePromise}>
      <PayForm event_id={event_id}/>
    </Elements>
  );
};

export default CheckoutPage;