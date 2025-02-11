import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { CustomRequired } from '../utils/CustomRequired';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Expose()
@ApiTags('LoginDto')
export class LoginDto {
  @IsEmail()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  email: string;

  @IsString()
  @CustomRequired()
  @ApiProperty()
  password: string;
}
