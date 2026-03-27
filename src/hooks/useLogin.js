import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export function useLogin() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("Providerで囲ってください");
  }

  return context;
}
