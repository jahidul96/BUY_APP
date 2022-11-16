import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [auth, setAuthUser] = useState(null);

  return (
    <UserContext.Provider value={{ auth, setAuthUser }}>
      {children}
    </UserContext.Provider>
  );
};
