import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  permissions: string[];
}
