import axios from 'axios';

const API_URL = 'http://localhost:8081/api/buses';

// Get all buses
export const getAllBuses = async () => {
    return await axios.get(API_URL);
};

// Add a new bus
export const addBus = async (bus) => {
    return await axios.post(API_URL, bus);
};

// Delete a bus by ID
export const deleteBus = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};

// Search for buses based on criteria
export const searchBuses = async (criteria) => {
    // Construct query parameters
    const params = new URLSearchParams(criteria).toString();
    return await axios.get(`${API_URL}/search?${params}`);
};