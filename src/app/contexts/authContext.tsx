// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = sessionStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
