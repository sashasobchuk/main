import { Expose } from 'class-transformer';
import { RoleDto } from './role.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Expose()
@ApiTags('RolesListDto')
export class RolesListDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  items: RoleDto[];
}
