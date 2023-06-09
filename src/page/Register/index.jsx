import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import customerservice from '../../services/customerservice';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [shippingAddress, setShippingAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [secretPassword, setSecretPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSecretPasswordChange = (e) => {
    setSecretPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === 'admin' && secretPassword !== '1234') {
      setMessage('Wrong secret password!');
      return;
    }

    const roleData = role === 'admin' ? ['admin'] : ['user'];

    AuthService.register(username, email, password, firstName, lastName, shippingAddress, phone, roleData)
      .then((response) => {
        console.log('Registration successful:', response);
        setMessage('Registration successful!');
        // Redirect or perform any necessary actions

        // Additional POST request to add customer
        const customerData = {
          username: username,
          firstName: firstName,
          lastName: lastName,
          emailAddress: email,
          phoneNumber: phone,
          shippingAdress: shippingAddress,
        };

        customerservice.addCustomer(customerData)
          .then((response) => {
            console.log('Customer creation successful:', response);
            // Redirect or perform any necessary actions
          })
          .catch((error) => {
            console.error('Customer creation error:', error);
            // Handle customer creation error
          });
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setMessage('Registration failed. Please try again.');
        // Handle registration error
      });
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="register-div">
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Shipping Address</label>
        <input
          type="text"
          value={shippingAddress}
          onChange={handleShippingAddressChange}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          required
        />

        <label>Role</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {role === 'admin' && (
          <div>
            <label>Secret Password</label>
            <input
              type="password"
              value={secretPassword}
              onChange={handleSecretPasswordChange}
              required
            />
          </div>
        )}

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}

      <button onClick={handleLoginClick}>Go to Login</button>
    </div>
  );
};

export default RegisterPage;
