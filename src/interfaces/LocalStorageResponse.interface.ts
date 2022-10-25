import { UserInfo } from "./UserInfo.interface";

export interface UserLocalstorage extends UserInfo {
  auth?: boolean;
}
