import { createContext, useState } from "react";

export const PrivateKeyContext = createContext();

export const PrivateKeyContextProvider = ({ children }) => {
  const [privateKey, setPrivateKey] = useState("");

  return (
    <PrivateKeyContext.Provider value={{ privateKey, setPrivateKey }}>
      {children}
    </PrivateKeyContext.Provider>
  );
};
