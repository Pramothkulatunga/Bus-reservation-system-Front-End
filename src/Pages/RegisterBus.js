import React, { useState } from 'react';
import { addBus } from '../Services/BusService';

const RegisterBus = () => {
  const [bus, setBus] = useState({
    busNumber: '',
    totalSeats: '',
    startingPoint: '',
    endingPoint: '',
    startingTime: '',
    fare: '',
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBus(bus);
      setFeedback({ type: 'success', message: 'Bus registered successfully!' });
      setBus({
        busNumber: '',
        totalSeats: '',
        startingPoint: '',
        endingPoint: '',
        startingTime: '',
        fare: '',
      });
    } catch (error) {
      console.error('Error registering bus:', error);
      setFeedback({ type: 'error', message: 'Failed to register bus.' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Register Bus</h1>
        {feedback && (
          <div
            className={`mb-4 p-2 rounded ${
              feedback.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            }`}
          >
            {feedback.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="busNumber">
              Bus Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="busNumber"
              value={bus.busNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalSeats">
              Total Seats
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="totalSeats"
              value={bus.totalSeats}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startingPoint">
              Starting Point
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="startingPoint"
              value={bus.startingPoint}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endingPoint">
              Ending Point
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="endingPoint"
              value={bus.endingPoint}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startingTime">
              Starting Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              name="startingTime"
              value={bus.startingTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fare">
              Fare
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="fare"
              value={bus.fare}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBus;