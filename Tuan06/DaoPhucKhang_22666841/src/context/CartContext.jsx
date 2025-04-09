import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const storedOrders = localStorage.getItem('orders');
  const [orders, setOrders] = useState(storedOrders ? JSON.parse(storedOrders) : []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);


  const addToCart = (item) => {
    setOrders((prevOrders) => {
      const exist = prevOrders.find((order) => order.id === item.id);
      if (exist) {
        return prevOrders.map((order) =>
          order.id === item.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
      }
      return [...prevOrders, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== itemId)
    );
  };

  const updateQuantity = (itemId, quantity) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === itemId ? { ...order, quantity } : order
      )
    );
  };

  const getTotalPrice = () => {
    return orders.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return orders.reduce((total, item) => total + parseInt(item.quantity), 0);
  };

  const value = {
    orders,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 