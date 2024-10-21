import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your actual publishable key from Stripe
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    roomType: 'standard',
    paymentMethod: 'creditCard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet, so return
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment intent on your server
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 5000, // Replace with the total amount (in cents)
        currency: 'usd',
      }),
    });

    const paymentIntent = await response.json();

    const { error } = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: userInfo.name,
          email: userInfo.email,
          address: {
            line1: userInfo.address,
          },
        },
      },
    });

    if (error) {
      console.error('Payment error:', error);
      // Optionally, display an error message to the user
    } else {
      console.log('Payment successful:', paymentIntent);
      // Handle successful payment (e.g., redirect to a success page)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block mb-1 text-xs">Name</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-xs">Email</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-xs">Address</label>
        <textarea
          name="address"
          value={userInfo.address}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
          rows="2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-xs">Check-In Date</label>
        <input
          type="date"
          name="checkInDate"
          value={userInfo.checkInDate}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-xs">Check-Out Date</label>
        <input
          type="date"
          name="checkOutDate"
          value={userInfo.checkOutDate}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-xs">Number of Guests</label>
        <input
          type="number"
          name="numberOfGuests"
          value={userInfo.numberOfGuests}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
          min="1"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-xs">Room Type</label>
        <select
          name="roomType"
          value={userInfo.roomType}
          onChange={handleChange}
          className="border rounded-lg w-full p-1 text-xs"
        >
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 text-xs">Card Details</label>
        <CardElement className="border rounded-lg w-full p-1 text-xs" />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 text-xs transition duration-200"
      >
        Complete Checkout
      </button>
    </form>
  );
};

const Checkout = () => {
  return (
    <div className="max-w-xs mx-auto p-3 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-3">Accommodation Checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
