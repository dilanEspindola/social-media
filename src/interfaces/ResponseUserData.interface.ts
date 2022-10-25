import { UserInfo } from "./UserInfo.interface";

export interface ResponseCreateUserData {
  statusCode: number;
  message: string;
}

export interface ResponseLoginData {
  auth: boolean;
  token?: string;
  publicKey?: string;
  message?: string;
  user?: UserInfo;
}
