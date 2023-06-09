import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

class CartService {
  getCartItems(customerId) {
    const url = `${BASE_URL}/customers/${customerId}/cart/cartitems`;
    return axios.get(url);
  }

  createCartItem(customerId, cartItem) {
    const url = `${BASE_URL}/customers/${customerId}/cart/cartitems`;
    return axios.post(url, cartItem);
  }

  deleteCartItem(customerId, cartItemId) {
    const url = `${BASE_URL}/customers/${customerId}/cart/cartitems/${cartItemId}`;
    return axios.delete(url);
  }

  updateCartItem(customerId, cartItemId, updatedCartItem) {
    const url = `${BASE_URL}/customers/${customerId}/cart/cartitems/${cartItemId}`;
    return axios.put(url, updatedCartItem);
  }
}

export default new CartService();
