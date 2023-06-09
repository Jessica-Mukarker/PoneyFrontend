import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, firstName, lastName, shippingAddress, phone, role) {
    return axios
      .post(API_URL + "signup", {
        username,
        email,
        password,
        firstName,
        lastName,
        shippingAddress,
        phone,
        role
      })
      .then(response => {
        console.log('Registration successful:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Registration error:', error.response.data);
        throw error.response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
