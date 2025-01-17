import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';

@ApiTags('UsersListDto')
export class UsersListDto {
  @Expose()
  @ApiProperty()
  total: number;

  @Expose()
  @Type(() => UserDto)
  @ApiProperty()
  items: UserDto[];
}
