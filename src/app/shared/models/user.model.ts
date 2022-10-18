import {UserRole} from "./user-role.model";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}
