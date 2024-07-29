import React, { useState } from 'react';
import { addCustomer } from '../Services/CustomerService.js';
import { useNavigate } from 'react-router-dom';

const RegisterCustomer = ({ refreshCustomers }) => {
  const [customer, setCustomer] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    age: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    if (!customer.name || !customer.mobile || !customer.email || !customer.city || !customer.age) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    try {
      await addCustomer(customer);
      setMessage('Customer registered successfully!');
      setCustomer({
        name: '',
        mobile: '',
        email: '',
        city: '',
        age: '',
      });
      refreshCustomers();
      navigate('/DisplayCustomers');
    } catch (error) {
      setError('Failed to register customer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Register Customer</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {message && <div className="mb-4 text-green-600">{message}</div>}
        {error && <div className="mb-4 text-red-600">{error}</div>}
        
        {/* Form fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        {/* Add other form fields here */}
        {/* Example fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="mobile">Mobile</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="mobile"
            value={customer.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="city">City</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="city"
            value={customer.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="age">Age</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="number"
            name="age"
            value={customer.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <button
          className={`px-4 py-2 rounded ${isLoading ? 'bg-gray-400' : 'bg-blue-500'} text-white`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterCustomer;