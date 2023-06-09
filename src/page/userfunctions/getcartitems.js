import React, { useContext, useEffect, useState } from 'react';
import CartService from './CartService';
import { CustomerContext } from './CustomerContext';

const CartItemList = () => {
  const { customer } = useContext(CustomerContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await CartService.getCartItems(customer.id);
        setCartItems(items);
      } catch (error) {
        console.error('Error retrieving cart items:', error);
      }
    };

    fetchCartItems();
  }, [customer.id]);

  return (
    <div>
      <h3>Cart Items</h3>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>Image: {item.image}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Cost: {item.total_cost}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItemList;
