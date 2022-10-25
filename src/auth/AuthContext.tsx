import { createContext } from "react";
import {
  ResponseCreateUserData,
  CreateUser,
  Login,
  ResponseLoginData,
} from "@/interfaces";

interface ContextProps {
  registerUser: (data: CreateUser) => Promise<ResponseCreateUserData>;
  login: (data: Login) => Promise<ResponseLoginData>;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);
