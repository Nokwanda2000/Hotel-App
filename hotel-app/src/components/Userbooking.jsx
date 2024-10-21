import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserBooking() {
  const location = useLocation();
  const history = useNavigate();
  const property = location.state?.property; // Access passed property data

  // Function to handle booking confirmation and navigate to the checkout page
  const handleBookingConfirmation = () => {
    // Navigate to the checkout page immediately when "Book" is clicked
    history('/UserCheckoutpage');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
      {property ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Room Information */}
          <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
          <div className="mb-4">
            <p className="text-gray-600">Address: {property.location}</p>
            <p className="text-gray-600">Price: ZAR {property.price} per night</p>
            <p className="text-gray-600">Number of Guests: {property.capacity}</p>
            <p className="text-gray-600">Room Type: {property.roomType}</p>
          </div>

          {/* Room Description */}
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold">Room Description</h4>
            <p className="text-gray-600">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold">Amenities</h4>
            <ul className="list-disc list-inside">
              {/* {property.amenities.map((amenity, index) => (
                <li key={index} className="text-gray-600">{amenity}</li>
              ))} */}
              {property.amenities}
            </ul>
          </div>

          {/* Room Images */}
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold">Room Pictures</h4>
            <div className="grid grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBookingConfirmation}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Book
          </button>
        </div>
      ) : (
        <p>No property selected for booking.</p>
      )}
    </div>
  );
}
