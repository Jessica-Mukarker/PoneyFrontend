import axios from 'axios';

const API_URL = 'http://localhost:8080';

class OrderService {
  getOrders(customerId) {
    const url = `${API_URL}/customers/${customerId}/orders`;
    return axios.get(url);
  }

  createOrder(customerId, orderData) {
    const url = `${API_URL}/customers/${customerId}/orders`;
    return axios.post(url, orderData);
  }

  deleteOrder(customerId, orderId) {
    const url = `${API_URL}/customers/${customerId}/orders/${orderId}`;
    return axios.delete(url);
  }

  updateOrder(customerId, orderId, orderData) {
    const url = `${API_URL}/customers/${customerId}/orders/${orderId}`;
    return axios.put(url, orderData);
  }
}

export default new OrderService();
