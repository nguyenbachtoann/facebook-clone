import React, { createContext, useState, useEffect } from "react";
import { useLogin } from "./reducerHooks";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const [userInfo, login] = useLogin();

  const checkAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, userInfo, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
