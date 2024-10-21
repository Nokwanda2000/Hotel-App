import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom } from '../features/AdminAddroomSlice';
import { uploadImagesToStorage } from '../features/storageUtility.jsx'; // Import a utility function for image uploads

export default function AdminAddRoom() {
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    price: '',
    capacity: '',
    amenities: '',
    images: [], // This will store the files
    location: '',
  });

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.room); // Adjust according to your slice name

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
      images: Array.from(e.target.files), // Convert FileList to Array
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate price and capacity
      if (roomData.price <= 0 || roomData.capacity <= 0) {
        alert('Price and capacity must be positive numbers.');
        return;
      }

      // Upload images to Firebase Storage and get the URLs
      const imageUrls = await uploadImagesToStorage(roomData.images);
    
      
      // Add the image URLs to the room data
      const newRoomData = {
        ...roomData,
        images: imageUrls,
      };

      // Dispatch the addRoom action
      await dispatch(addRoom(newRoomData));

      // Reset the form after submission
      setRoomData({
        name: '',
        description: '',
        price: '',
        capacity: '',
        amenities: '',
        images: [],
        location: '',
        roomType:''
      });
    } catch (err) {
      console.error('Failed to add room:', err);
    }
  };
console.log(handleSubmit)
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Add New Room</h1>
      
      {/* Display loading and error messages */}
      {status === 'loading' && <p>Adding room...</p>}
      {status === 'failed' && <p className="text-red-500">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Room Name Field */}
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
        
        {/* Description Field */}
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
        
        {/* Price Field */}
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
            min="1" // Ensure a minimum value of 1
          />
        </div>
        
        {/* Capacity Field */}
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
            min="1" // Ensure a minimum value of 1
          />
        </div>
        
        {/* Amenities Field */}
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

        {/*RoomType fiels*/}

        <div>
            <label className="block mb-1 text-sm" htmlFor="roomType">Room Type</label>
            <select id="roomType" name="roomType" value={roomData.roomType}
            onChange={handleChange} className="border rounded-md w-full p-1 text-sm"></select>
            
            
        </div>
        
        {/* Location Field */}
        <div>
          <label className="block mb-1 text-sm" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={roomData.location}
            onChange={handleChange}
            className="border rounded-md w-full p-1 text-sm"
            placeholder="Enter the location"
            required
          />
        </div>
        
        {/* Image Upload Field */}
        <div>
          <label className="block mb-1 text-sm" htmlFor="images">Upload Images</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded-md w-full p-1 text-sm"
            multiple 
            required
          />
        </div>

        {/* Image Preview */}
        {roomData.images.length > 0 && (
          <div className="mt-2">
            <h3 className="text-sm font-semibold">Image Previews:</h3>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {roomData.images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-transparent border border-blue-500 text-blue-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white text-sm ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'} // Disable the button while loading
        >
          Add Room
        </button>
      </form>
    </div>
  );
}
