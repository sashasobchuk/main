import { Expose } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { PermissionDto } from '../permissions';

@ApiTags('RoleItemDto')
export class RoleItemDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  permissions: PermissionDto[];
}
