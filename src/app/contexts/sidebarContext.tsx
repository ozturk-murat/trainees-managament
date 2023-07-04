import React, { createContext, useContext, useEffect, useState } from 'react';

interface SidebarContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState('/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const savedActivePage = sessionStorage.getItem('activePage');
    if (savedActivePage) {
      setActivePage(savedActivePage);
    }
  }, []);

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    sessionStorage.setItem('activePage', page);
  };

  const handleSetIsSidebarOpen = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <SidebarContext.Provider value={{ activePage, setActivePage: handleSetActivePage, isSidebarOpen, setIsSidebarOpen: handleSetIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
