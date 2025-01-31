import { Expose } from 'class-transformer';
// import { ApiOverrideProperty } from '../utils'

export class RolePreviewDto {
  @Expose()
  //@ApiOverrideProperty()
  id: number;

  @Expose()
  //@ApiOverrideProperty()
  name: string;
}
