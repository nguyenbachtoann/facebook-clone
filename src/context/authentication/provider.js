import React, { createContext, useState } from "react";
import { useLoginSuccess } from "./reducerHooks";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const [userInfo, loginSuccess] = useLoginSuccess();

  const checkAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, loginSuccess, userInfo, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
