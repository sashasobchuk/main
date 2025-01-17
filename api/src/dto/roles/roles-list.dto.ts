import { Expose } from 'class-transformer';
import { RoleDto } from './role.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('RolesListDto')
export class RolesListDto {
  @Expose()
  @ApiProperty()
  total: number;

  @Expose()
  @ApiProperty()
  items: RoleDto[];
}
