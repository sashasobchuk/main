import { Expose } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('RolePreviewDto')
export class RolePreviewDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;
}
