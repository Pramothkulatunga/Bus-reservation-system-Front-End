import axios from 'axios';

const API_URL = 'http://localhost:8081/api/customers';

export const getCustomerStack = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCustomer = async (customer) => {
  const response = await axios.post(API_URL, customer);
  return response.data;
};