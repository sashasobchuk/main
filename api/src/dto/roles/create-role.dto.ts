import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Expose()
export class CreateRoleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  permissions: string[];
}
