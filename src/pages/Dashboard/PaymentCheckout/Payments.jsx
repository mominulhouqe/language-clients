import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
    const { cart } = useCart();
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2));

    const [storedPrice, setStoredPrice] = useState(null);

    useEffect(() => {
        const storedItem = localStorage.getItem('selectedItem');
        if (storedItem) {
            const parsedItem = JSON.parse(storedItem);
            setStoredPrice(parsedItem.price);
        }
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-12"> Please Payment !!! .</h2>
            <h3>Your total Price : $ {storedPrice}</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={storedPrice} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payments;
