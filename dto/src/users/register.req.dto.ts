import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RoleDto } from '../roles';
// import { ApiOverrideProperty } from '../utils'

export class RegisterDto {
  @Expose()
  //@ApiOverrideProperty()
  @IsNotEmpty({ message: 'Username is required 234' })
  username: string;

  @Expose()
  //@ApiOverrideProperty()
  @IsNotEmpty({ message: 'Password is required' })
  @IsEmail()
  email: string;

  @Expose()
  //@ApiOverrideProperty()
  @IsNotEmpty({ message: 'Password digest is required' })
  password: string;

  @Expose()
  //@ApiOverrideProperty()
  roles: RoleDto[];
}
