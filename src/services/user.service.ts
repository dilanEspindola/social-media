import {
  CreateUser,
  Login,
  ResponseLoginData,
  ResponseCreateUserData,
} from "@/interfaces";
import { URL } from "@/utils";

export const createUser = async (userData: CreateUser) => {
  try {
    const res = await fetch(`${URL}/users/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data: ResponseCreateUserData = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const loginUser = async (userData: Login) => {
  try {
    const res = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data: ResponseLoginData = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
