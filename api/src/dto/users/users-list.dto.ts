import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';

@Expose()
@ApiTags('UsersListDto')
export class UsersListDto {
  @ApiProperty()
  total: number;

  @Type(() => UserDto)
  @ApiProperty()
  items: UserDto[];
}
