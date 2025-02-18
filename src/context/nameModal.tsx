import { createContext, useState } from "react";

export type NameModalContextType = {
  closedOnce: boolean;
  setClosedOnce: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NameModalContext = createContext<NameModalContextType | null>(null);

export const NameModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [closedOnce, setClosedOnce] = useState(false);
  return <NameModalContext.Provider value={{ closedOnce, setClosedOnce }}>
    {children}
  </NameModalContext.Provider>
}