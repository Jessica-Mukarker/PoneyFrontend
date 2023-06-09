import React, { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  customer: null,
  login: (userData) => {},
  loginCustomer: (customerData) => {},
});

export default AuthContext;
