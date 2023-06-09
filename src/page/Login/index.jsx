import React, { useState, useContext, useEffect } from 'react';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../components/context/Auth/AuthContex';
import customerservice from '../../services/customerservice';

const LoginPage = () => {
  const { login, loginCustomer } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginFormHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(username, password);
      console.log('Login successful:', response);

      // Fetch customer data
      const customerData = await customerservice.getCustomers();
      const dataArray = Array.from(customerData); // Convert JSON to array
      const userCustomer = dataArray.find(
        (customer) =>
          customer.firstName === response.firstName &&
          customer.lastName === response.lastName
      );

      // Update the customer in the context
      if (userCustomer) {
        login(response);
        loginCustomer(userCustomer);
      } else {
        console.error('Customer not found!');
      }

      // Redirect or perform any necessary actions
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div className="login-div">
      <form className="login-form form-login" onSubmit={loginFormHandler}>
        <label>Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          placeholder="Enter your Username"
          onChange={usernameHandler}
        />

        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="Enter your Password"
          onChange={passwordHandler}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
