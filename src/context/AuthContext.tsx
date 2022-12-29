import React, { ReactNode, useState } from "react";
import { ROLES } from "../utils";

interface AuthData {
  userName: string;
  role: ROLES;
  accessToken: string;
}

interface AuthContextData {
  auth: AuthData | undefined;
  setAuth: (newState: AuthData) => void;
}

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [auth, setAuth] = useState<AuthData>();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
