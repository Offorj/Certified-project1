'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, AuthProviderProps } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true); 
    }
  }, []);

  const signIn = (user: string) => {
    setUser(user);
    localStorage.setItem('user', user); 
    setIsAuthenticated(true); 
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user'); 
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
