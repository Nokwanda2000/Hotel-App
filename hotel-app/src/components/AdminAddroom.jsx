import React, { useState } from 'react';

export default function AdminAddRoom() {
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    price: '',
    capacity: '',
    amenities: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setRoomData((prev) => ({
      ...prev,
      images: [...e.target.files], // Get the selected files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    const formData = new FormData();
    for (const key in roomData) {
      if (key === 'images') {
        roomData.images.forEach((image) => formData.append('images', image));
      } else {
        formData.append(key, roomData[key]);
      }
    }

    console.log('Room Data:', roomData);
    // Reset form or show success message after submission
    setRoomData({
      name: '',
      description: '',
      price: '',
      capacity: '',
      amenities: '',
      images: [],
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Add New Room</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1 text-sm" htmlFor="name">Room Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={roomData.name}
            onChange={handleChange}
            className="border rounded-md w-full p-1 text-sm"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={roomData.description}
            onChange={handleChange}
            className="border rounded-md w-full p-1 text-sm"
            rows="2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={roomData.price}
            onChange={handleChange}
            className="border rounded-md w-full p-1 text-sm"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm" htmlFor="capacity">Capacity</label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={roomData.capacity}
            onChange={handleChange}
            className="border rounded-md w-full p-1 text-sm"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm" htmlFor="amenities">Amenities</label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            value={roomData.amenities}
            onChange={handleChange}
            className="border rounded-md w-full p-1 text-sm"
            placeholder="e.g., Wi-Fi, TV"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm" htmlFor="images">Upload Images</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded-md w-full p-1 text-sm"
            multiple // Allow multiple file uploads
            required
          />
        </div>
        <button
          type="submit"
          className="bg-transparent border border-blue-500 text-blue-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white text-sm"
        >
          Add Room
        </button>
      </form>
    </div>
  );
}
