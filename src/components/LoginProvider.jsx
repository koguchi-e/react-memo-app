import { useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}
