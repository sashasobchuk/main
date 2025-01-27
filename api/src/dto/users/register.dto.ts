import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RoleDto } from '../roles';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('RegisterDto')
export class RegisterDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @Expose()
  @ApiProperty()
  // @IsNotEmpty({ message: 'Password is required' })
  @IsEmail()
  email: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty({ message: 'Password digest is required' })
  password: string;

  @Expose()
  @ApiProperty()
  roles: RoleDto[];
}
