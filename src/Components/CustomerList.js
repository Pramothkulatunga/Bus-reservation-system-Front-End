import React, { useEffect, useState } from 'react';
import { getCustomerStack } from '../Services/CustomerService.js';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await getCustomerStack();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div>
            <h1>Customer List</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email} - {customer.registrationDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;