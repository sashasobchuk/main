import { Expose } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { PermissionValueType } from '../../utils/permissions';

@ApiTags('RoleDto')
export class RoleDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  permissions: PermissionValueType[];
}
