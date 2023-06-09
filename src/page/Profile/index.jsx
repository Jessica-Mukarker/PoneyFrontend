import React, { useState } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAccountSettingOpen, setIsAccountSettingOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const handleToggleAccountSetting = () => {
    setIsAccountSettingOpen(!isAccountSettingOpen);
  };

  const handleAddPaymentMethod = (method) => {
    setPaymentMethods([...paymentMethods, method]);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handlePlaceOrder = (order) => {
    setOrders([...orders, order]);
    setCartItems([]);
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-image-container">
          <h1>nothing serious</h1>
          <img
            className="profile-image"
            src="https://stackposts.com/blog/uploads/images/2021/image/girl%20(8837).jpg"
            alt="Profile"
          />
        </div>
        <div className="options">
          
          {isLoggedIn ? (
            <>
              <div className="option" onClick={handleSignOut}>
                <h3>Sign Out</h3>
                <p>Log out of your account</p>
              </div>
              <div className="option" onClick={handleToggleAccountSetting}>
                <h3>Account Settings</h3>
                <p>Manage your account settings</p>
              </div>
              <div className="option">
                <h3>View Orders</h3>
                <p>View your past orders</p>
              </div>
              <div className="option">
                <h3>Cart</h3>
                <p>View and manage your shopping cart</p>
              </div>
            </>
          ) : (
            <div className="option" onClick={handleSignUp}>
              <h3>Sign Up</h3>
              <p>Create a new account</p>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        {isLoggedIn ? (
          <div className="information">
            <h1>nothhhing</h1>
            {isAccountSettingOpen ? (
              <form><h1>nothing serious</h1>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Your name.." />

                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Your last name.." />

                  <label htmlFor="id">ID</label>
                  <input type="number" id="ID" name="id" placeholder="Your ID.." />

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" />

                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="Your username" />

                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Your password" />

                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Your phone number" />

                  <button type="submit">Save Changes</button>
                </div>
              </form>
            ) : (
              <>
                <h2>Welcome back, jessica!</h2>
                <p>Email: jessica@example.com</p>
                <p>Username: jessica123</p>
                <p>Phone Number: 1234567890</p>
              </>
            )}
          </div>
        ) : (
          <div className="information">
            <h2>Create an Account</h2>
            <form>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Your last name.." />

                <label htmlFor="id">ID</label>
                <input type="number" id="ID" name="id" placeholder="Your ID.." />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Your username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password" />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Your phone number" />

                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;


 /*   <div className="profile-container">
      
    <div className="split left">
      <div className="left">
      <div className="centered">
        <h2>Jane Flex</h2>
        <p>Some text.</p>
      </div>
    </div>
    </div>
    <div className="split right">
      
      
    <div className="center">  <><></></>
    <form action="/action_page.php">
      <div className="div1">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="id">ID</label>
    <input type="number" id="ID" name="id" placeholder="Your ID.."/>

    <label for="Email">Email</label>
    <input type="Email" id="Fmail" name="Email" placeholder="your Email"/>

    <label for="username">UserName</label>
    <input type="text" id="username" name="username" placeholder="Your UserName.."/>

    <label for="Password">Password</label>
    <input type="text" id="Password" name="Password" placeholder="Your Password.."/>

    <label for="phoneNumber">Phone Number</label>
    <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Your Phone Number.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="australia">Palistine</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit"/>
    </div>
  </form>
  </div></div>
</div>*/
