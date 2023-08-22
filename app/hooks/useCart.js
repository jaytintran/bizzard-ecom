import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0); // New state

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartItemCount((prevCount) => prevCount + 1); // Increment cart item count
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    setCartItemCount((prevCount) => prevCount - 1); // Decrement cart item count
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0); // Reset cart item count
  };

  return {
    cartItems,
    cartItemCount, // Provide the cart item count
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart;
