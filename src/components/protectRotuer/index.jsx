import React, { useContext } from 'react';
import AuthContext from '../context/Auth/AuthContex';
import LoginPage from '../../page/Login';
// HOC
const ProtectRouter = (props) => {
  console.log('props', props);
  const { isLoging } = useContext(AuthContext);

  console.log('is 11111111', isLoging);
  const { children } = props;

  if (!isLoging) {
    // user not Login
    return <LoginPage />;
  }
  return children;
};

export default ProtectRouter;
