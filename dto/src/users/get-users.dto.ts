import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
// import { ApiOverrideProperty } from '../utils'

export class GetUsersDto {
  @Expose()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  // @ApiOverrideProperty({ required: false })
  offset?: number;

  @Expose()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  // @ApiOverrideProperty({ required: false })
  limit?: number;

  @Expose()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  // @ApiOverrideProperty({ required: false })
  id?: number;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  // @ApiOverrideProperty({ required: false })
  username?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  // @ApiOverrideProperty({ required: false })
  email?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  // @ApiOverrideProperty({ required: false })
  q?: string;
}
