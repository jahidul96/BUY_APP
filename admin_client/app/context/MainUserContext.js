import { createContext, useState } from "react";

export const MainUserContext = createContext();

const MainUserContextProvider = ({ children }) => {
  const [updatedUser, setUpdatedUser] = useState(null);

  return (
    <MainUserContext.Provider value={{ updatedUser, setUpdatedUser }}>
      {children}
    </MainUserContext.Provider>
  );
};

export default MainUserContextProvider;
