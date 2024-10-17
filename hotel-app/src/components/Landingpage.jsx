import React from 'react';
import Image from '../assets/pexels-asadphoto-1268855.jpg'; 
import Footer from './Footer';
import Image2 from '../assets/meklay-yotkhamsay-AAZaK31x6FM-unsplash.jpg';
import Image3 from '../assets/farhad-ibrahimzade-vxPtIlRwq2g-unsplash.jpg';
import Image4 from '../assets/cauayan-island-resort-JNoJ-eisUuY-unsplash.jpg';
import { Link } from 'react-router-dom';

export default function HotelLandingPage() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-5xl md:text-5xl font-lora font-bold tracking-tight hover:text-blue-600">
            Welcome to Luxury Stays
          </h1>
          <p className="mt-6 text-l md:text-2xl max-w-2xl tracking-wide font-light leading-relaxed">
            Discover the ultimate in comfort and elegance. Indulge in a luxurious experience with us.
          </p>
          <br></br>
          <Link to='/UserAccomodationspage'>
          <a 
            
            className="mt-8 px-10 py-3 bg-transparent border rounded-full font-semibold hover:to-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Book Now
          </a>
          
          </Link>
         
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <hr className='bg-blue-700 h-1' />
          <br />
          <h2 className="text-2xl font-lora font-bold text-gray-900 mb-8 tracking-tight">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-transparent shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
              <img src={Image2} alt="Luxury Rooms" className="mx-auto mb-6 rounded-lg object-cover h-40 w-full opacity-90 hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900">Luxury Rooms</h3>
              <p className="text-gray-600 mt-3 text-lg">
                Experience world-class comfort with state-of-the-art amenities and breathtaking views.
              </p>
            </div>
            <div className="p-8 bg-transparent shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
              <img src={Image3} alt="Gourmet Dining" className="mx-auto mb-6 rounded-lg object-cover h-40 w-full opacity-90 hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900">Gourmet Dining</h3>
              <p className="text-gray-600 mt-3 text-lg">
                Indulge in exquisite dishes prepared by top chefs using the finest ingredients.
              </p>
            </div>
            <div className="p-8 bg-transparent shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
              <img src={Image4} alt="Infinity Pool" className="mx-auto mb-6 rounded-lg object-cover h-40 w-full opacity-90 hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900">Infinity Pool</h3>
              <p className="text-gray-600 mt-3 text-lg">
                Relax in our luxurious infinity pool while enjoying breathtaking views of the city skyline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-lora font-bold text-gray-900 mb-8 tracking-tight">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 bg-transparent shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
              <p className="text-gray-600 text-lg italic">"An unforgettable stay! The service was perfect, and the room was beyond expectations."</p>
              <h4 className="mt-4 text-xl font-semibold text-gray-800">- Sarah J.</h4>
            </div>
            <div className="p-8 bg-transparent shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
              <p className="text-gray-600 text-lg italic">"A truly luxurious experience with stunning views, delicious food, and impeccable service."</p>
              <h4 className="mt-4 text-xl font-semibold text-gray-800">- Michael T.</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
