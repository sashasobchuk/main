import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { CustomRequired } from '../utils/CustomRequired';
// import { ApiOverrideProperty } from '../utils'

export class LoginDto {
  @Expose()
  @IsEmail()
  @IsString()
  @CustomRequired()
  //@ApiOverrideProperty()
  username: string;

  @Expose()
  @IsString()
  @CustomRequired()
  //@ApiOverrideProperty()
  password: string;
}
