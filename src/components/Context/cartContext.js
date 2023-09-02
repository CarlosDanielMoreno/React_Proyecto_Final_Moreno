import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuatity: 0,
    totalPrice: 0
  });
  
  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuatity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const addItem = (item, quantity) => {
      const existingItem = cart.find(prod => prod.id === item.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        setCart(prev => [...prev, { ...item, quantity }]);
      }
      setTotalQuantity(prev => prev + quantity);
      setTotalPrice(prev => prev + item.price * quantity);
    };
    
  
    const removeItem = itemId => {
      const itemToRemove = cart.find(prod => prod.id === itemId);
      const CartUpdated = cart.filter(prod => prod.id !== itemId);
      setCart(CartUpdated);
      setTotalQuantity(prev => prev - itemToRemove.quantity);
      setTotalPrice(prev => prev - itemToRemove.price * itemToRemove.quantity);
    };
  
    const clearCart = () => {
      setCart([]);
      setTotalQuantity(0);
      setTotalPrice(0);
    };
  
  
    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuatity, totalPrice }}>
        {children}
      </CartContext.Provider>
    );
  };
  
