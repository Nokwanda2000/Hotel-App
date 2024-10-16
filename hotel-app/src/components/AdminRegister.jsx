import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminRegister() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Admin Info:\nFull Name: ${fullName}\nEmail: ${email}\nCountry: ${country}\nAddress: ${address}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-3">Hotel Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="John Doe"
            />
          </div>

          {/* Business Email */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="email">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="admin@hotel.com"
            />
          </div>

          {/* Country */}
          <div className="mb-2 relative">
            <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out max-h-40 overflow-y-auto"
              style={{ position: 'relative', zIndex: 10 }} // Ensures dropdown opens above any surrounding elements
            >
              <option value="" disabled>Select your country</option>
              {/* Full List of Countries */}
              {/* Add your country options here */}
            </select>
          </div>

          {/* Physical Address */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="address">
              Physical Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="123 Main St, City"
            ></textarea>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="********"
            />
            <div className="flex items-center mt-1">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-xs text-gray-600">Show Password</label>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="********"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>

        {/* Already have an account? */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Already have an account? </span>
            <Link to='/Adminloginpage'> <a  className="text-sm text-blue-600 hover:underline">Sign In</a></Link>
          
        </div>
      </div>
    </div>
  );
}
