import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdmin } from '../features/AdminRegisterSlice'; 
import { db } from '../firebaseConfig'; // Ensure you're importing the correct db
import { doc, setDoc } from 'firebase/firestore';

export default function AdminRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const { status, error } = useSelector((state) => state.register); 

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Dispatch the registerAdmin action
    const userData = { fullName, email, password, country, address };
    const actionResult = await dispatch(registerAdmin(userData));

    if (registerAdmin.fulfilled.match(actionResult)) {
      // Save the admin data to Firestore
      try {
        const adminRef = doc(db, 'admins', email); // Use email as the document ID
        await setDoc(adminRef, {
          fullName,
          email,
          country,
          address,
        });
        
        alert(`Successfully registered`);
        navigate('/AdminBookingsDashboardpage'); // Navigate to the admin dashboard after successful registration
      } catch (firestoreError) {
        console.error('Error writing document: ', firestoreError);
        alert('Failed to register in Firestore.');
      }
    } else {
      alert(error || 'Failed to register.'); // Show error message from Redux state
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-sans text-center text-blue-800 mb-3">Admin Registration</h2>
        
        {/* Display error message if any */}
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

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
              className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out"
            >
              <option value="" disabled>Select your country</option>
              <option value="Algeria">Algeria</option>
              <option value="Angola">Angola</option>
              <option value="Benin">Benin</option>
              <option value="Botswana">Botswana</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
              <option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Egypt">Egypt</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Ghana">Ghana</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Ivory Coast">Ivory Coast</option>
              <option value="Kenya">Kenya</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Mali">Mali</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Namibia">Namibia</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Sudan">Sudan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Togo">Togo</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Uganda">Uganda</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
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
            disabled={status === 'loading'} // Disable button while loading
          >
            {status === 'loading' ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Already have an account? */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Link to="/Adminloginpage" className="text-sm text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
