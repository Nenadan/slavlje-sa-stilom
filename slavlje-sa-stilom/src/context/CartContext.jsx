import { createContext, useContext, useMemo, useRef, useState } from 'react';

const CartContext = createContext(null);

const FREE_SHIPPING_THRESHOLD = 6000;
const SHIPPING_COST = 690;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartTriggerRef = useRef(null);

  function addToCart(product) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [
        ...current,
        { id: product.id, name: product.name, price: product.price, unit: product.unit, qty: 1 },
      ];
    });
  }

  function changeQuantity(id, delta) {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    );
  }

  function removeFromCart(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = items.length === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      shipping,
      total,
      addToCart,
      changeQuantity,
      removeFromCart,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => {
        setIsCartOpen(false);
        cartTriggerRef.current?.focus();
      },
      cartTriggerRef,
    }),
    [items, count, subtotal, shipping, total, isCartOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
