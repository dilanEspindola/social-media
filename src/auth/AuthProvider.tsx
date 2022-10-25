import { FC } from "react";
import { AuthContext } from "./AuthContext";
import { Login, CreateUser } from "@/interfaces";
import {
  updateNotification,
  loadingNofication,
  saveToken,
  saveUser,
  savePublicKey,
} from "@/utils";
import { createUser, loginUser } from "@/services";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const registerUser = async (userData: CreateUser) => {
    const id = loadingNofication();
    try {
      const fetchInfo = await createUser(userData);
      if (Array.isArray(fetchInfo.message))
        updateNotification(id, fetchInfo.message[0], "error");

      if (fetchInfo.statusCode === 422) {
        updateNotification(id, fetchInfo.message, "error");
      }

      return fetchInfo;
    } catch (error: any) {
      console.log(error.message);
      updateNotification(id, "internal server error", "error");
      throw new Error(error);
    }
  };

  const login = async (userData: Login) => {
    const id = loadingNofication();
    try {
      const infoUser = await loginUser(userData);

      if (!infoUser.auth) {
        updateNotification(id, infoUser.message!, "error");
        return infoUser;
      }

      const { token, publicKey, user } = infoUser;
      saveToken(token!);
      savePublicKey(publicKey!);
      saveUser(user!);
      return infoUser;
    } catch (error: any) {
      updateNotification(id, "internal server error", "error");
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
