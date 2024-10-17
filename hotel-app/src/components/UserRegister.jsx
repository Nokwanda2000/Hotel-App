import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/RegisterSlice'; 
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

export default function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Access the Redux dispatch function

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Dispatch the registerUser thunk with user data (Firebase Authentication handles password security)
      await dispatch(registerUser({ email, password })).unwrap();
      
      // Save only non-sensitive user data to Firestore (excluding password)
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        createdAt: new Date(),
      });
  
      console.log("Document written with ID: ", docRef.id);
      alert('Registration successful!'); // Handle success
  
    } catch (error) {
      console.error("Error registering or saving data: ", error);
      alert(`Registration failed: ${error.message}`); // Handle errors
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3l font-sans text-center text-blue-800 mb-6">
          Welcome, please create an account using your details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to='/UserLoginpage'>
              <a className="text-blue-600 hover:underline">Log in</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
