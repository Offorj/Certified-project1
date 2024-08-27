'use client'
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { CartItem } from '@/types/CartItem';
import Image from 'next/image';

type CartState = CartItem[];

type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'INCREASE_QUANTITY'; payload: number }
  | { type: 'DECREASE_QUANTITY'; payload: number }
  | { type: 'INIT_CART'; payload: CartItem[] };

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    case 'INCREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case 'DECREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'INIT_CART':
      return action.payload; 
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
   
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'INIT_CART', payload: JSON.parse(savedCart) });
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
  
    if (initialized) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, initialized]);

  if (!initialized) {
   
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader text-center">
          <h1>Please wait...</h1>
       
        </div>
      </div>
    );
  }

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartProvider;
