import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { ApiOverrideProperty } from '../utils'

export class CountRolesDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  // @ApiOverrideProperty({ required: false })
  q?: string;
}
