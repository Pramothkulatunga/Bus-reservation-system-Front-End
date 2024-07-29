import React, { useEffect, useState } from 'react';
import { getReservations } from '../Services/ReservationService.js'; // Ensure you have this service implemented

const DisplayReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await getReservations();
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
        setError('Failed to fetch reservations.');
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Reservations</h1>
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-600">{error}</div>
        ) : (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 border px-4 bg-gray-200 text-left">ID</th>
                <th className="py-2 border px-4 bg-gray-200 text-left">Customer Name</th>
                <th className="py-2 border px-4 bg-gray-200 text-left">Bus Number</th>
                <th className="py-2 border px-4 bg-gray-200 text-left">Seat Number</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id} className="border-t">
                  <td className="py-2 px-4 border">{reservation.id}</td>
                  <td className="py-2 px-4 border">{reservation.customerName}</td>
                  <td className="py-2 px-4 border">{reservation.busNumber}</td>
                  <td className="py-2 px-4 border">{reservation.seatNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DisplayReservations;