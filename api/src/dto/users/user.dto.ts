import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { RolePreviewDto } from '../roles';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export enum UserStatus {
  Active = 'active',
  NotVerified = 'notverified',
  Deactivated = 'deactivated',
}

@Expose()
@ApiTags('UserDto')
export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @IsOptional()
  @ApiProperty()
  email: string;

  @ApiProperty()
  status: UserStatus;

  @IsOptional()
  @ApiProperty()
  roles: RolePreviewDto[];

  @ApiProperty()
  createdAt: Date;
}
