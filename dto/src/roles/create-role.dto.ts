import { Expose } from 'class-transformer';
// import { ApiOverrideProperty } from '../utils'

export class CreateRoleDto {
  @Expose()
  //@ApiOverrideProperty()
  name: string;

  @Expose()
  //@ApiOverrideProperty()
  permissions: string[];
}
