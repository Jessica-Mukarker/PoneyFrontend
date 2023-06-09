import React, { useState } from 'react';
import './navBar.css';
import peonyImage from './Poeny cosmetics.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="nav-bar">
      <div>
        <img src={peonyImage} alt="Image Description" />
      </div>
      <div className="nav-items">
        <span>
          <Link to="/Home">Home</Link>
        </span>

        <span>
          <Link to="/AllProducts">All Products</Link>
        </span>

        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/profile">Profile</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/signup">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
