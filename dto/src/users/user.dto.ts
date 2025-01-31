import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { RolePreviewDto } from '../roles';
// import { ApiOverrideProperty } from '../utils'

export enum UserStatus {
  Active = 'active',
  NotVerified = 'notverified',
  Deactivated = 'deactivated',
}

export class UserDto {
  @Expose()
  //@ApiOverrideProperty()
  id: number;

  @Expose()
  //@ApiOverrideProperty()
  username: string;

  @Expose()
  @IsOptional()
  //@ApiOverrideProperty()
  email: string;

  @Expose()
  //@ApiOverrideProperty()
  status: UserStatus;

  @Expose()
  @IsOptional()
  //@ApiOverrideProperty()
  roles: RolePreviewDto[];

  @Expose()
  //@ApiOverrideProperty()
  createdAt: Date;
}
