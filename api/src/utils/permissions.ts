export class PermissionsClass {
  static readonly roles = {
    ReadRoles: 'read:roles',
    CreateRoles: 'create:roles',
    UpdateRoles: 'update:roles',
    DeleteRoles: 'delete:roles',
  } as const;
  static readonly users = {
    ReadUsers: 'read:users',
    CreateUser: 'create:users',
    SendInvite: 'send:invite:to:user',
    DeactivateUser: 'deactivate:user',
    UpdateUser: 'update:user',
  } as const;

  static readonly allPermissions = {
    ...PermissionsClass.roles,
    ...PermissionsClass.users,
  } as const;
}

export const { allPermissions: Permissions } = PermissionsClass;

type PermissionKeys = keyof typeof Permissions;
export type PermissionValueType = (typeof Permissions)[PermissionKeys];
