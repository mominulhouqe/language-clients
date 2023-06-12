import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import './CheckoutForm.css'



const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");


  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handlePaymentSuccess = () => {

    Swal.fire({
      icon: "success",
      title: "Payment Successful",
      text: "Thank you for your payment!",
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    console.log('payment intent', paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      if (cart && cart.length > 0) {
        const names = cart.map(item => item.name);
        const ids = cart.map(item => item._id);
        const emails = cart.map(item => item.email);
        const image = cart.map(item => item.image);
        const instructor = cart.map(item => item.instructor);

        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          status: 'pending', // Set the status as 'pending'
          cart: {
            names,
            emails,
            image,
            instructor
          },
          date: new Date(),
        };

        axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if (res.data.insertResult.insertedId) {
              handlePaymentSuccess(); // Display SweetAlert after successful payment
              // const paymentId = res.data.insertResult.insertedId;
              // axiosSecure.delete(`/payments/${paymentId}`)
              //     .then(() => {
              //     })
              //     .catch(err => {
              //         console.log(err);
              //     });
            }
          });
      }
    }
  };


  return (
    <>
      <form className="w-2/3 m-8 " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}

    </>


  );
};

export default CheckoutForm;
