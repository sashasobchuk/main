import { Expose } from 'class-transformer';
import {  IsNotEmpty } from 'class-validator';

import {UserDto} from "./user.dto";
// import { ApiOverrideProperty } from '../utils'

export class RegisterResDto {
  @Expose()
  //@ApiOverrideProperty()
  @IsNotEmpty({ message: 'Username is required 1123' })
  token: string;

  @Expose()
  //@ApiOverrideProperty()
  @IsNotEmpty({ message: 'Username is required 123' })
  user: UserDto;

}
