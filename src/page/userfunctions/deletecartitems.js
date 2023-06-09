import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartService from './CartService';
import { CustomerContext } from './CustomerContext';

const CartItemDelete = ({ itemId }) => {
  const { customer } = useContext(CustomerContext);

  const handleDelete = async () => {
    try {
      await CartService.deleteCartItem(customer.id, itemId);
      // Display success toast notification
      toast.success('Cart item deleted!');
      // Perform any necessary actions after deleting the cart item
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Item</button>
    </div>
  );
};

export default CartItemDelete;
