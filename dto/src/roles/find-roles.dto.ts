import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { CountRolesDto } from './count-roles.dto';
// import { ApiOverrideProperty } from '../utils'

export class FindRolesDto extends CountRolesDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  // @ApiOverrideProperty({ required: false })
  offset?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  // @ApiOverrideProperty({ required: false })
  limit?: number;

  @IsOptional()
  @IsString()
  // @ApiOverrideProperty({ required: false })
  sort?: number;
}
