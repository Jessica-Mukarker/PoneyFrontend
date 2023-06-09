import axios from 'axios';

const API_URL = 'http://localhost:8080/categories';

class CategoryService {
  getCategories() {
    return axios.get(API_URL);
  }

  createCategory(categoryData) {
    return axios.post(API_URL, categoryData);
  }

  deleteCategory(categoryId) {
    return axios.delete(`${API_URL}/${categoryId}`);
  }

  updateCategory(categoryId, categoryData) {
    return axios.put(`${API_URL}/${categoryId}`, categoryData);
  }
}

export default new CategoryService();
