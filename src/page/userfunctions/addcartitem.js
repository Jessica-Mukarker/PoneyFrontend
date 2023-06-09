import React, { useContext } from 'react';
import CartService from './CartService';
import { CustomerContext } from './CustomerContext';

const AddCartItem = ({ product }) => {
  const { customer } = useContext(CustomerContext);

  const handleAddCartItem = async () => {
    try {
      const cartItems = await CartService.getCartItems(customer.id);
      const existingCartItem = cartItems.find((item) => item.image === product.image);

      if (existingCartItem) {
        await CartService.updateCartItem(customer.id, existingCartItem.id, {
          quantity: existingCartItem.quantity + 1,
        });
      } else {
        await CartService.createCartItem(customer.id, {
          quantity: 1,
          image: product.image,
          total_cost: product.price,
        });
      }

      // Perform any necessary actions after adding/updating the cart item
    } catch (error) {
      console.error('Error adding/updating cart item:', error);
    }
  };

  return (
    <div>
      <h3>Add to Cart</h3>
      <button onClick={handleAddCartItem} className="btn btn-dark btn-lg btn-block">
        Add to Cart
      </button>
    </div>
  );
};

export default AddCartItem;
