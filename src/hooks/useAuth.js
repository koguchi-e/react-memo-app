import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export function useAuth() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("Providerで囲ってください");
  }

  return context;
}
