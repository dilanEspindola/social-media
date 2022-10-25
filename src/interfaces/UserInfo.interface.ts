import { Profile } from "./ProfileInfo.interface";

export interface UserInfo {
  id: number;
  fullname: string;
  email: string;
  password: string;
  profile: Profile | null;
  privateKey?: string;
}

export type CreateUser = Omit<UserInfo, "id" | "privateKey" | "profile">;

export type Login = Pick<UserInfo, "email" | "password">;
