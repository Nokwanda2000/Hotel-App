import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements } from '@stripe/react-stripe-js';

// Replace with your actual publishable key from Stripe
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

export default function Checkout() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    roomType: 'standard',
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
    
    const stripe = await stripePromise;

    // For demo purposes, you would typically send userInfo to your server to create a PaymentIntent
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

    // Confirm card payment
    const { error } = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      payment_method: {
        card: cardElement, // Reference to the Stripe card element
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
    } else {
      console.log('Payment successful:', paymentIntent);
      // Handle successful payment (e.g., redirect to a success page)
    }
  };

  return (
    <div className="max-w-xs mx-auto p-3 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-3">Accommodation Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1 text-xs" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-xs" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-xs" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
            rows="2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-xs" htmlFor="checkInDate">Check-In Date</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={userInfo.checkInDate}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-xs" htmlFor="checkOutDate">Check-Out Date</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={userInfo.checkOutDate}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-xs" htmlFor="numberOfGuests">Number of Guests</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={userInfo.numberOfGuests}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
            min="1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-xs" htmlFor="roomType">Room Type</label>
          <select
            id="roomType"
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
        {/* Card Element for Stripe */}
        <div>
          <label className="block mb-1 text-xs">Card Details</label>
          <CardElement />
          <div id="card-errors" role="alert"></div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 text-xs transition duration-200"
        >
          Complete Checkout
        </button>
      </form>
    </div>
  );
}
