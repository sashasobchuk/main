import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RoleDto } from '../roles';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Expose()
@ApiTags('RegisterDto')
export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password is required' })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password digest is required' })
  password: string;

  @ApiProperty()
  roles: RoleDto[];
}
