import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  // Sample data for bookings
  const bookings = [
    {
      id: 1,
      guestName: 'John Doe',
      property: 'Ocean View Villa',
      checkIn: '2024-10-25',
      checkOut: '2024-10-30',
      status: 'Confirmed',
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      property: 'Mountain Cabin',
      checkIn: '2024-11-05',
      checkOut: '2024-11-10',
      status: 'Pending',
    },
    // Add more booking data as needed
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/admin-bookings" className="hover:text-blue-400">Bookings</a>
            </li>
            <Link to='/AdminViewAllAccomodations'>
            <li className="mb-4">
              <a href="/admin-properties" className="hover:text-blue-400">Properties</a>
            </li>
            </Link>
          
            <Link to='/AdminAddroompage'>
            <li className="mb-4">
              <a href="/admin-reports" className="hover:text-blue-400">Add new property</a>
            </li>
            
            </Link>
            <li className="mb-4">
              <a href="/admin-users" className="hover:text-blue-400">Users</a>
            </li>
            <li>
              <a href="/admin-reports" className="hover:text-blue-400">Reports</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Accommodation Bookings</h1>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Guest Name</th>
              <th className="border px-4 py-2">Property</th>
              <th className="border px-4 py-2">Check-In</th>
              <th className="border px-4 py-2">Check-Out</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="border px-4 py-2">{booking.id}</td>
                <td className="border px-4 py-2">{booking.guestName}</td>
                <td className="border px-4 py-2">{booking.property}</td>
                <td className="border px-4 py-2">{booking.checkIn}</td>
                <td className="border px-4 py-2">{booking.checkOut}</td>
                <td className="border px-4 py-2">{booking.status}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
