import { Expose } from 'class-transformer';
import { RoleDto } from './role.dto';
// import { ApiOverrideProperty } from '../utils'

export class RolesListDto {
  @Expose()
  //@ApiOverrideProperty()
  total: number;

  @Expose()
  //@ApiOverrideProperty()
  items: RoleDto[];
}
