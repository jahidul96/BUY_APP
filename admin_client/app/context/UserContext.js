import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <UserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </UserContext.Provider>
  );
};
