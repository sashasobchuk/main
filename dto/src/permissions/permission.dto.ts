import { Expose } from 'class-transformer';
import { PermissionValueType } from '../utils'

export class PermissionDto {
  @Expose()
  //@ApiOverrideProperty()
  id: string;

  @Expose()
  //@ApiOverrideProperty()
  type: PermissionValueType;
}
