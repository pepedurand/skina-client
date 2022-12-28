import React, { ReactNode, useState } from "react";
import { LoginData } from "../types";

type UserContextType = {
  user: LoginData[];
  saveUser: (user: LoginData) => void;
};

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = React.createContext<any | undefined>(undefined);

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
