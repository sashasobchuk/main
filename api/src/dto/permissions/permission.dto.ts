import { ApiProperty } from '@nestjs/swagger';
import { PermissionValueType } from '../../utils/permissions';
import { Expose } from 'class-transformer';

@Expose()
export class PermissionDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: PermissionValueType;
}
