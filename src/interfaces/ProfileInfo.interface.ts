import { UserInfo } from "./UserInfo.interface";
import { Posts } from "./PostInfo.interface";

export interface Profile {
  id?: number;
  username?: string;
  description?: string;
  file?: string;
  user?: UserInfo;
  message?: string;
}

export interface ProfileByUsername {
  id?: number;
  username?: string;
  description?: string;
  file?: string;
  user?: UserInfo;
  posts?: Posts[];
}

export interface CreateProfile {
  username: string;
  description: string;
  file: any;
  user: number;
}
