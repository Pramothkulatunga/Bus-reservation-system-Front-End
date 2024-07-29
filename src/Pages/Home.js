import React, { useState } from 'react';
import { searchBuses } from '../Services/BusService';

const Home = () => {
  const [search, setSearch] = useState({
    startingPoint: '',
    endingPoint: '',
  });

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await searchBuses(search);
      console.log('Search results:', results);
    } catch (error) {
      console.error('Error searching buses:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Bus Reservation System</h1>
        <p className="text-lg text-gray-700 text-center mb-4">
          Welcome to the Bus Reservation System. Use the navigation below to register, reserve, and view reservations.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
            Register
          </button>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
            Reserve
          </button>
          <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700">
            View Reservations
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Search for Buses</h2>
          <form onSubmit={handleSearchSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="startingPoint">Starting Point</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="startingPoint"
                value={search.startingPoint}
                onChange={handleSearchChange}
                placeholder="Enter starting point"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="endingPoint">Ending Point</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="endingPoint"
                value={search.endingPoint}
                onChange={handleSearchChange}
                placeholder="Enter ending point"
              />
            </div>
            <button
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;