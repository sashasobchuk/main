import { Expose, Type } from 'class-transformer';
import { UserDto } from './user.dto';
// import { ApiOverrideProperty } from '../utils'

export class UsersListDto {
  @Expose()
  //@ApiOverrideProperty()
  total: number;

  @Expose()
  @Type(() => UserDto)
  //@ApiOverrideProperty()
  items: UserDto[];
}
