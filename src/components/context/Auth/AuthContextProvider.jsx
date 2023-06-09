import React, { createContext, useState } from 'react';
import AuthContext from './AuthContex';

const AuthContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState(null);
  const isLogging = user ? true : false;

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const loginCustomer = (customerData) => {
    setCustomer(customerData);
    localStorage.setItem('customer', JSON.stringify(customerData));
  };

  const logOut = () => {
    setUser(null);
    setCustomer(null);
    localStorage.removeItem('user');
    localStorage.removeItem('customer');
  };

  const values = { user, customer, isLogging, login, loginCustomer, logOut };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
