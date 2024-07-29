import React, { useState } from 'react';
import { reserveSeat } from '../Services/ReservationService.js'; // Ensure you have this service implemented

const ReserveSeat = () => {
  const [reservation, setReservation] = useState({
    customerName: '',
    busNumber: '',
    seatNumber: '',
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reserveSeat(reservation);
      setFeedback({ type: 'success', message: 'Seat reserved successfully!' });
      setReservation({
        customerName: '',
        busNumber: '',
        seatNumber: '',
      });
    } catch (error) {
      console.error('Error reserving seat:', error);
      setFeedback({ type: 'error', message: 'Failed to reserve seat.' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Reserve Seat</h1>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
              Customer Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="customerName"
              value={reservation.customerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="busNumber">
              Bus Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="busNumber"
              value={reservation.busNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seatNumber">
              Seat Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="seatNumber"
              value={reservation.seatNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveSeat;