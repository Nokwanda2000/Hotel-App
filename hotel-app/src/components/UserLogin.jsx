import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/LoginSlice'; 

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { status, error } = useSelector((state) => state.login); // Access login state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation for email and password
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    

    // Dispatch the loginUser action with email and password
    const resultAction = await dispatch(loginUser({ email, password }));
    
    // If the login was successful, navigate to another page (e.g., dashboard)
    if (loginUser.fulfilled.match(resultAction)) {
      navigate('/dashboard'); // Replace with your desired route
    } else {
      // Optionally, display an alert for errors
      alert(error || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border border-gray-200">
        <h2 className="text-3xl font-sans text-center text-blue-900 mb-6">
          Welcome, please sign in using your details
        </h2>
        
        {/* Display loading and error states */}
        {status === 'loading' && <p className="text-center text-blue-600 mb-4">Signing in...</p>}
        {status === 'failed' && <p className="text-center text-red-600 mb-4">Login failed: {error || 'Please check your details and try again.'}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className="mt-1 px-4 py-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="mt-1 px-4 py-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
              disabled={status === 'loading'} // Disable button while loading
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/UserSignupPage">
              <span className="text-indigo-600 font-semibold hover:underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
