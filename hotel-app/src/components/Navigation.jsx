import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  return (
    <>
      <nav className="bg-transparent text-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded={isOpen ? 'true' : 'false'}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  // Menu open icon (hamburger)
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  // Menu close icon (X)
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block">
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      to="/"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/UserLoginpage"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      User Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/UserSignupPage"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      User SignUp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Adminloginpage"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Admin Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AdminRegisterpage"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Admin SignUp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/UserAccomodationspage"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Accommodations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Favouritespage"
                      className="hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Favourites
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu (visible when isOpen is true) */}
        {isOpen && (
          <div className="sm:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              <li>
                <Link
                  to="/"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/UserLoginpage"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  User Login
                </Link>
              </li>
              <li>
                <Link
                  to="/UserSignupPage"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  User SignUp
                </Link>
              </li>
              <li>
                <Link
                  to="/Adminloginpage"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Admin Login
                </Link>
              </li>
              <li>
                <Link
                  to="/AdminRegisterpage"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Admin SignUp
                </Link>
              </li>
              <li>
                <Link
                  to="/UserAccomodationspage"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link
                  to="/Favouritespage"
                  className="hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
}
