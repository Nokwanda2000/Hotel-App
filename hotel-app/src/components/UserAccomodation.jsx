import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig'; 
import { collection, getDocs } from 'firebase/firestore';

const UserAccommodation = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [properties, setProperties] = useState([]); // State to store fetched properties
  const [favorites, setFavorites] = useState([]); // State to manage favorites
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertiesCollection = collection(db, 'room'); // Replace 'room' with your Firestore collection name
        const snapshot = await getDocs(propertiesCollection);
        const propertyList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProperties(propertyList);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []); // Fetch properties when the component mounts

  // Filter properties based on the selected location
  const filteredProperties = selectedLocation === 'All'
    ? properties
    : properties.filter((property) => property.location === selectedLocation);

  const handleReserve = (property) => {
    navigate('/Userbooking', { state: { property } });
  };

  const handleAddToFavorites = (property) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === property.id);
      if (!isAlreadyFavorite) {
        return [...prevFavorites, property]; // Add property to favorites
      }
      return prevFavorites; // Do not add if it's already in favorites
    });
  };

  const handleNavigateToFavorites = () => {
    navigate('/Favouritespage', { state: { favorites } }); // Navigate to favorites page
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Looking for the perfect stay?</h2>
      <p className="text-center text-gray-600 mb-4">
        Travelers with similar searches booked these properties
      </p>

      {/* Location Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="location" className="block text-gray-700 mb-2">
          Filter by Location:
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border rounded-md p-2 w-full"
        >
          <option value="All">All Locations</option>
          {/* Dynamically generate options based on unique locations from properties */}
          {Array.from(new Set(properties.map(property => property.location))).map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={property.images[0]} // Assuming images is an array and you want to show the first image
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="property-info p-4">
              <h3 className="property-name text-lg font-semibold">{property.name}</h3>
              <p className="property-address text-gray-500">{property.address}</p>
              <div className="property-rating mt-2">
                <span className="rating-number text-yellow-500 font-bold">{property.rating}</span>
                <span className="rating-text text-gray-500"> - Very Good</span>
              </div>
              <p className="property-reviews text-gray-500">{property.reviews} reviews</p>
              <p className="property-price font-semibold mt-2">
                Starting from ZAR {property.price}
                {property.oldPrice && (
                  <span className="line-through text-gray-400"> ZAR {property.oldPrice}</span>
                )}
              </p>
              {/* Add to Favorites Button */}
              <button
                onClick={() => handleAddToFavorites(property)} // Just add to favorites, no navigation
                className="mt-3 text-red-500 hover:text-red-700"
              >
                <FaHeart className="inline mr-1" />
                Add to Favorites
              </button>
              {/* Reserve Button */}
              <button
                onClick={() => handleReserve(property)} 
                className="mt-2 ml-3 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200"
              >
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigate to Favorites Page Button */}
      <button
        onClick={handleNavigateToFavorites} // Button to navigate to favorites page
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
      >
        View Favorites
      </button>
    </div>
  );
};

export default UserAccommodation;
