import { Expose } from 'class-transformer';
import { PermissionDto } from '../permissions';
// import { ApiOverrideProperty } from '../utils'

export class RoleItemDto {
  @Expose()
  //@ApiOverrideProperty()
  id: number;

  @Expose()
  //@ApiOverrideProperty()
  name: string;

  @Expose()
  //@ApiOverrideProperty()
  permissions: PermissionDto[];
}
