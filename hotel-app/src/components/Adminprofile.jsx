import React from 'react';

export default function AdminProfile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Admin Profile</h1>
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-medium">John Doe</h2>
          <p className="text-gray-600">Hotel Administrator</p>
        </div>
        <div className="mb-4">
          <button className="bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full py-1 px-3 text-sm transition duration-300 ease-in-out">
            Edit Profile
          </button>
        </div>
        <div className="mb-4">
          <button className="bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-full py-1 px-3 text-sm transition duration-300 ease-in-out">
            Delete Account
          </button>
        </div>
        <div className="mb-4">
          <button className="bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white rounded-full py-1 px-3 text-sm transition duration-300 ease-in-out">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
