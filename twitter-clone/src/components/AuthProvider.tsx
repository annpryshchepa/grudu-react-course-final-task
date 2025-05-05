import { createContext, useContext, useState } from "react";

type UserType = {
  name: string;
  email: string;
}

const defaultUser = { name: "", email: "" }

const AuthContext = createContext(defaultUser);
export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserType>(defaultUser);
  const login = (newUser:UserType) => {
    setUser(newUser);
  };
  const logout = () => {
    setUser(defaultUser);
  };

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};