import { UserInfo, UserLocalstorage, Profile } from "@/interfaces";

const LOCALSTORAGE_NAME = {
  user: "user",
  token: "token",
  key: "publicKey",
};

export const saveUser = (data: UserInfo) => {
  localStorage.setItem(LOCALSTORAGE_NAME.user, JSON.stringify(data));
};

export const getUserLocalstorage = (): UserLocalstorage => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME.user)!);
};

export const saveToken = (token: string) => {
  localStorage.setItem(LOCALSTORAGE_NAME.token, JSON.stringify(token));
};

export const getToken = (): string | null => {
  if (localStorage.getItem(LOCALSTORAGE_NAME.token))
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME.token)!);
  return null;
};

export const savePublicKey = (publicKey: string) => {
  localStorage.setItem(LOCALSTORAGE_NAME.key, JSON.stringify(publicKey));
};

export const getPubliceKey = (): string | null => {
  if (localStorage.getItem(LOCALSTORAGE_NAME.key))
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME.key)!);
  return null;
};

export const getProfile = (): Profile | null => {
  const userProfile: UserInfo = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_NAME.user)!
  );
  if (!userProfile) return null;
  return userProfile.profile;
};

export const removeAll = () => localStorage.clear();
