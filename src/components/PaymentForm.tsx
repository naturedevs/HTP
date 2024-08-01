import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#33eeff',
        '::placeholder': {
          color: '#ccc',
        },
      },
      invalid: {
        color: '#00ff00',
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Make API call to process the payment using paymentMethod.id
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardElementOptions}/>
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;