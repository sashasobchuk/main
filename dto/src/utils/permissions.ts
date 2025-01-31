export class PermissionsClass {
  static readonly roles = {
    ReadRoles: 'read:roles',
    CreateRoles: 'create:roles',
    UpdateRoles: 'update:roles',
    DeleteRoles: 'delete:roles',
  } as const;
  static readonly chats = {
    CreateChat: 'create:chat',
    DeleteChat: 'delete:chat',
    DeleteAnyChatMessage: 'delete:any:chat:message',
    OpenChatOnMessage: 'open:chat:on:message',
  } as const;
  static readonly users = {
    ReadUsers: 'read:users',
    CreateUser: 'create:users',
    SendInvite: 'send:invite:to:user',
    DeactivateUser: 'deactivate:user',
    UpdateUser: 'update:user',
    ReadUserAsteriskData: 'read:user:asterisk:data',
  } as const;

  static readonly allPermissions = {
    ...PermissionsClass.roles,
    ...PermissionsClass.chats,
    ...PermissionsClass.users,
  } as const;
}

export const { allPermissions: Permissions } = PermissionsClass;

type PermissionKeys = keyof typeof Permissions;
export type PermissionValueType = (typeof Permissions)[PermissionKeys];
