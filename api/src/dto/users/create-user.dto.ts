import { Expose, Transform } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CustomRequired } from '../utils/CustomRequired';

@ApiTags('CreateUserDto')
export class CreateUserDto {
  @Expose()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  username: string;

  @Expose()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  firstName: string;

  @Expose()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  lastName: string;

  @Expose()
  @IsString()
  @CustomRequired()
  @ApiProperty()
  email: string;

  @Expose()
  @IsArray()
  @ApiProperty({ type: [Number], default: [] })
  @Transform(({ value }) => {
    return value || [];
  })
  roles: number[];
}
