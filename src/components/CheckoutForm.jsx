import React from "react";
import { useState } from 'react';
import { PaymentElement, useStripe, useElements  } from '@stripe/react-stripe-js';

function CheckoutForm() {
   
   const stripe = useStripe();
   const elements = useElements();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [cardNumber, setCardNumber] = useState('');
   const [expMonth, setExpMonth] = useState('');
   const [expYear, setExpYear] = useState('');
   const [cvc, setCvc] = useState('');

   React.useEffect(() => {
      
      if (!stripe) {
        return;
      }

      const clientSecret = new URLSearchParams(window.location.search).get(
         "payment_intent_client_secret"
      );
  
      if (!clientSecret) {
         return;
      }
  
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
         switch (paymentIntent.status) {
            case "succeeded":
               setMessage("Payment succeeded!");
               break;
            case "processing":
               setMessage("Your payment is processing.");
               break;
            case "requires_payment_method":
               setMessage("Your payment was not successful, please try again.");
               break;
            default:
               setMessage("Something went wrong.");
               break;
         }
      });
    }, [stripe]);

   // Use stripe object methods here
   const handleSubmit = async (event) => {

      e.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js hasn't yet loaded.
         // Make sure to disable form submission until Stripe.js has loaded.
         return;
      } 

      setIsLoading(true);

      const { error } = await stripe.confirmPayment({
         elements,
         confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:3000",
         },
      });

      if (error.type === "card_error" || error.type === "validation_error") {
         setMessage(error.message);
      } else {
         setMessage("An unexpected error occurred.");
      }

      setIsLoading(false);
   };

   const paymentElementOptions = {
      layout: "tabs",
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

                        <PaymentElement id="payment-element" options={paymentElementOptions} />

                        <input type="text" 
                           className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
                           placeholder = "User Name"
                        />
                        <input type="text" 
                           className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
                           value={cardNumber}
                           onChange={(e) => setCardNumber(e.target.value)}
                           placeholder="4242 4242 4242 4242"
                        />
                        <div className="flex space-x-2">
                           <input type="text" 
                              className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
                              value={expMonth}
                              onChange={(e) => setExpMonth(e.target.value)}
                              placeholder="MM"
                           />	
                           <input type="text" 
                              className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
                              value={expYear}
                              onChange={(e) => setExpYear(e.target.value)}
                              placeholder="YY"
                           />	
                           <input type="text" 
                              className="w-full md:h-[50px] h-[45px] pl-3 border-[2px] border-gray-300"
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value)}
                              placeholder="CVC"
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

                     {error && <div style={{ color: 'red' }}>{error}</div>}

                     <div className="pr-5 pl-5">
                        <button type="submit" className="w-full md:h-[54px] h-[45px] bg-primaryColor text-[17px] text-[#FFFFFF]" disabled={!stripe || loading}>
                           {loading ? 'Processing...' : 'COMPLETE ORDER'}
                        </button>
                     </div>

                  </div>
               </div>
            </div>

         </form>
      </>
   );
}

export default CheckoutForm;
