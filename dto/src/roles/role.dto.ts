import { Expose } from 'class-transformer';
import { ApiOverrideProperty, PermissionValueType } from '../utils'
// import { PermissionValueType } from '../../utils/permissions';

export class RoleDto {
  @Expose()
  //@ApiOverrideProperty()
  id: number;

  @Expose()
  //@ApiOverrideProperty()
  name: string;

  @Expose()
  // @ApiOverrideProperty({ type: [String] })
  permissions: PermissionValueType[];
}
//is not assignable to type RegisterDto
// Types of property roles are incompatible.
// Type
// {
// permissions?: (AnyPresentValue | undefined)[] | undefined;
// id: number;
// name: string; }[]