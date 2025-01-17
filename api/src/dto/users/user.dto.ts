import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { RolePreviewDto } from '../roles';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export enum UserStatus {
  Active = 'active',
  NotVerified = 'notverified',
  Deactivated = 'deactivated',
}

@ApiTags('UserDto')
export class UserDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  username: string;

  @Expose()
  @IsOptional()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  status: UserStatus;

  @Expose()
  @IsOptional()
  @ApiProperty()
  roles: RolePreviewDto[];

  @Expose()
  @ApiProperty()
  createdAt: Date;
}
