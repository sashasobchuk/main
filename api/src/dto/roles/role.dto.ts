import { Expose } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { PermissionValueType } from '../../utils/permissions';

@Expose()
@ApiTags('RoleDto')
export class RoleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  permissions: PermissionValueType[];
}
