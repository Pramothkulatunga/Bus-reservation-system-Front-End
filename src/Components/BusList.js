import React, { useEffect, useState } from 'react';
import { getAllBuses } from '../Services/BusList.js';

const BusList = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await getAllBuses();
                setBuses(response.data);
            } catch (error) {
                console.error('Error fetching buses:', error);
            }
        };

        fetchBuses();
    }, []);

    return (
        <div>
            <h1>Bus List</h1>
            <ul>
                {buses.map(bus => (
                    <li key={bus.id}>
                        {bus.name} - {bus.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusList;