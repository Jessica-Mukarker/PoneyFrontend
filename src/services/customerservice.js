import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Fetches the list of customers
const getCustomers = () => {
  return axios.get(`${API_URL}/customers`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching customers:', error);
      throw error;
    });
};

// Fetches a single customer by ID
const getCustomerById = (customerId) => {
  return axios.get(`${API_URL}/customers/${customerId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching customer with ID ${customerId}:`, error);
      throw error;
    });
};

// Adds a new customer
const addCustomer = (customerData) => {
  return axios.post(`${API_URL}/customers`, customerData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error adding customer:', error);
      throw error;
    });
};


// Updates an existing customer by ID
const updateCustomer = (customerId, customerData) => {
  return axios.put(`${API_URL}/customers/${customerId}`, customerData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error updating customer with ID ${customerId}:`, error);
      throw error;
    });
};

// Deletes a customer by ID
const deleteCustomer = (customerId) => {
  return axios.delete(`${API_URL}/customers/${customerId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error deleting customer with ID ${customerId}:`, error);
      throw error;
    });
};

export default {
  getCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer
};
