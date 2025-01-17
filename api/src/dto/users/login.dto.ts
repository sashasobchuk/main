import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { CustomRequired } from '../utils/CustomRequired';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('LoginDto')
export class LoginDto {
  @Expose()
  @IsEmail()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  email: string;

  @Expose()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  password: string;
}
