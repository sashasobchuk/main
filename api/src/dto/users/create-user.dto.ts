import { Expose, Transform } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CustomRequired } from '../utils/CustomRequired';

@Expose()
@ApiTags('CreateUserDto')
export class CreateUserDto {
  @IsString()
  @CustomRequired()
  @ApiProperty()
  username: string;

  @IsString()
  @CustomRequired()
  @ApiProperty()
  firstName: string;

  @IsString()
  @CustomRequired()
  @ApiProperty()
  lastName: string;

  @IsString()
  @CustomRequired()
  @ApiProperty()
  email: string;

  @IsArray()
  @ApiProperty({ type: [Number], default: [] })
  @Transform(({ value }) => {
    return value || [];
  })
  roles: number[];
}
