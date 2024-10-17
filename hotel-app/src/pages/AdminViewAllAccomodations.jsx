import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function AdminViewAllAccommodations() {
  const [accommodations, setAccommodations] = useState([]);

  // Simulate fetching accommodation data from an API
  useEffect(() => {
    const fetchedAccommodations = [
      {
        id: 1,
        name: 'Luxury Suite',
        location: 'New York, USA',
        type: 'Suite',
        pricePerNight: 250,
        availability: 'Available',
      },
      {
        id: 2,
        name: 'Beach House',
        location: 'Malibu, USA',
        type: 'House',
        pricePerNight: 450,
        availability: 'Booked',
      },
      {
        id: 3,
        name: 'Mountain Retreat',
        location: 'Aspen, USA',
        type: 'Cabin',
        pricePerNight: 300,
        availability: 'Available',
      },
    ];

    setAccommodations(fetchedAccommodations);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Accommodations</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Accommodation</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-center">Type</th>
              <th className="py-3 px-6 text-center">Price Per Night</th>
              <th className="py-3 px-6 text-center">Availability</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {accommodations.length > 0 ? (
              accommodations.map((accommodation) => (
                <tr key={accommodation.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">{accommodation.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{accommodation.location}</td>
                  <td className="py-3 px-6 text-center">{accommodation.type}</td>
                  <td className="py-3 px-6 text-center">${accommodation.pricePerNight}</td>
                  <td className="py-3 px-6 text-center">
                    <span
                      className={`py-1 px-3 rounded-full text-xs ${
                        accommodation.availability === 'Available'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {accommodation.availability}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-full ml-2 hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No accommodations available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

 
    </div>
  );
}
