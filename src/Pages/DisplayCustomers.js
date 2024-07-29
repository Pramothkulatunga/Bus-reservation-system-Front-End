import React, { useEffect, useState } from 'react';
import { getCustomerStack } from '../Services/CustomerService.js';

const DisplayCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await getCustomerStack();
                console.log('Fetched customers:', data);
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Customer List</h1>
                <ul className="space-y-4">
                    {customers.length === 0 ? (
                        <p>No customers found.</p>
                    ) : (
                        customers.map((customer) => (
                            <li key={customer.id} className="bg-gray-100 p-4 rounded-lg shadow">
                                <p className="font-bold">Name: {customer.name}</p>
                                <p>Mobile: {customer.mobile}</p>
                                <p>Email: {customer.email}</p>
                                <p>City: {customer.city}</p>
                                <p>Age: {customer.age}</p>
                                <p>Registration Date: {customer.registrationDate}</p>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DisplayCustomers;