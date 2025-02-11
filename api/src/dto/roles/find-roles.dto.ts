import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { CountRolesDto } from './count-roles.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Expose()
@ApiTags('FindRolesDto')
export class FindRolesDto extends CountRolesDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ required: false })
  offset?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  @ApiProperty({ required: false })
  limit?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sort?: number;
}
