"use client"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/PaymentForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default CheckoutPage;