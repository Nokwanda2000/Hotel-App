import React, { useState } from 'react';
import UserSignupPage from './UserSignupPage';
import AdminLoginPage from './Adminloginpage';

export default function Login() {
  const [isUserLogin, setIsUserLogin] = useState(true); // State to manage which form to show

  const handleToggle = () => {
    setIsUserLogin((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      <h1 className="text-lg font-semibold mb-2">
        {isUserLogin ? 'User Login' : 'Admin Login'}
      </h1>
      <div className="mb-2">
        <button
          onClick={handleToggle}
          className={`border rounded-full px-3 py-1 transition duration-300 ease-in-out text-sm ${
            isUserLogin ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-500'
          }`}
        >
          Switch to {isUserLogin ? 'Admin Login' : 'User Login'}
        </button>
      </div>
      {isUserLogin ? <UserSignupPage /> : <AdminLoginPage />}
    </div>
  );
}
