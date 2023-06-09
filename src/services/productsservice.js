import axios from 'axios';

const API_URL = 'http://localhost:8080/products';

class ProductService {
  // Get all products
  getAllProducts() {
    return axios.get(API_URL);
  }

  // Get a specific product by ID
  getProductById(productId) {
    return axios.get(`${API_URL}/${productId}`);
  }

  // Create a new product
  createProduct(productData) {
    return axios.post(API_URL, productData);
  }

  // Update an existing product
  updateProduct(productId, productData) {
    return axios.put(`${API_URL}/${productId}`, productData);
  }

  // Delete a product
  deleteProduct(productId) {
    return axios.delete(`${API_URL}/${productId}`);
  }
}

export default new ProductService();
