import { Role } from "src/users/enums/role.enum";
import { PermissionType } from "../authorization/permission.type";

export interface ActiveUserData {
  /** user id */
  sub: number;
  /** user email */
  email: string;
  /** user role */
  role: Role;
  /** user permissions */
  permissions: PermissionType[];
}
