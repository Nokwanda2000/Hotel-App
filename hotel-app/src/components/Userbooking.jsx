import React from 'react';
import { useLocation } from 'react-router-dom';

export default function UserBooking() {
  const location = useLocation();
  const property = location.state?.property; // Access passed property data

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
      {property ? (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          <p className="text-gray-600">Address: {property.address}</p>
          <p className="text-gray-600">Price: ZAR {property.price}</p>
          {/* Add more booking details as needed */}
          <button className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200">
            Confirm Booking
          </button>
        </div>
      ) : (
        <p>No property selected for booking.</p>
      )}
    </div>
  );
}
