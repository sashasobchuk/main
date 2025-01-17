import { ApiProperty } from '@nestjs/swagger';
import { PermissionValueType } from '../../utils/permissions';
import { Expose } from 'class-transformer';

export class PermissionDto {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  type: PermissionValueType;
}
