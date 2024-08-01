"use client"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/PaymentForm';
import PayForm from '@/components/PayForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PayForm />
    </Elements>
  );
};

export default CheckoutPage;