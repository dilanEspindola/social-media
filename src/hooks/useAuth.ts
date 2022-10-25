import { useContext } from "react";
import { AuthContext } from "@/auth";

export const useAuth = () => {
  const { login, registerUser } = useContext(AuthContext);

  return { login, registerUser };
};
