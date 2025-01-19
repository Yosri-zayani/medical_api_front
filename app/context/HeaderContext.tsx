// contexts/HeaderContext.tsx
import { createContext, useState, useContext } from 'react';

interface HeaderContextType {
  userName: string | null;
  setUserName: (name: string | null) => void;
  onSignOut: () => void; 
}

const HeaderContext = createContext<HeaderContextType | null>(null);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState<string | null>(null); // Initialize with null or a default value
  const [onSignOut, setOnSignOut] = useState<() => void>(() => {});

  return (
    <HeaderContext.Provider value={{ userName, setUserName, onSignOut }}>
      {children}
    </HeaderContext.Provider>
  );
};


export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
};