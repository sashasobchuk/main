import { Expose } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Expose()
@ApiTags('RolePreviewDto')
export class RolePreviewDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
