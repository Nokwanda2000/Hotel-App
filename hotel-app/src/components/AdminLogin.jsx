import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../features/AdminLoginSlice';
import { useDispatch } from 'react-redux';
import AdminAPI from '../features/AdminAPI'; 

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      // Call the login function from AdminAPI
      const user = await AdminAPI.login({ email, password });
      dispatch(loginSuccess(user)); // Dispatch the login success action
      navigate('/AdminBookingsDashboardpage'); // Redirect on success
    } catch (error) {
      setError(error.message); // Set the error message
      dispatch(loginFailure(error.message)); // Dispatch the login failure action
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2l font-sans text-center text-blue-900 mb-6">
          Welcome! Please enter your details to login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="********"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>} {/* Display error messages */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-200 ease-in-out"
          >
            Login
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
