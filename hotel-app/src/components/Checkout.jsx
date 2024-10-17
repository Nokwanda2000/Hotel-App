import React, { useState } from 'react';

export default function Checkout() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the checkout logic here, e.g., API call
    console.log('Checkout Info:', userInfo);
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
        <div>
          <label className="block mb-1 text-xs" htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={userInfo.paymentMethod}
            onChange={handleChange}
            className="border rounded-lg w-full p-1 text-xs"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
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
