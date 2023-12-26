import React, { createContext, useContext, useState, useEffect } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSearchbar, setIsSearchbar] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleSearchbar = () => {
    setIsSearchbar(!isSearchbar);
  };

  useEffect(() => {
    const body = document.body;
  
    // Add or remove the "overflowhidden" class based on either isActive or isSearchbar state
    if (isActive || isSearchbar) {
      body.classList.add('overflowhidden');
    } else {
      body.classList.remove('overflowhidden');
    }
  
    // Cleanup the class when the component unmounts
    return () => {
      body.classList.remove('overflowhidden');
    };
  }, [isActive, isSearchbar]);

  return (
    <MenuContext.Provider value={{ isActive, toggleMenu, isSearchbar, toggleSearchbar }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const useSearchbar = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
