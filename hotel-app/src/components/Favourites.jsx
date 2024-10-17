import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  // Fetch favourites from localStorage (or state management like Redux/Context API)
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  // Remove hotel from favourites
  const handleRemoveFavourite = (hotelId) => {
    const updatedFavourites = favourites.filter(hotel => hotel.id !== hotelId);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites)); // Update localStorage
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl text-blue-700 font-bold mb-6">Your Favourite Accomodations</h1>
      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favourites.map((hotel) => (
            <div key={hotel.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-gray-900 font-bold mt-2">${hotel.price} per night</p>
              <Link
                to={`/hotels/${hotel.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Details
              </Link>
              <button
                onClick={() => handleRemoveFavourite(hotel.id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
              >
                Remove from Favourites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You don't have any favourite hotels yet.</p>
      )}
    </div>
  );
}
