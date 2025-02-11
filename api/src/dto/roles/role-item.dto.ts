import { Expose } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { PermissionDto } from '../permissions';

@Expose()
@ApiTags('RoleItemDto')
export class RoleItemDto {
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;

  @ApiProperty()
  permissions: PermissionDto[];
}
