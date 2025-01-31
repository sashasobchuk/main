import { Expose, Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ApiOverrideProperty } from './api-override-property.decorator'

export class GetTableDefaultDto {
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
  @IsString()
  @IsNotEmpty()
  // @ApiOverrideProperty({ required: false })
  q?: string;

  @Expose()
  @IsOptional()
  @Transform(({ value }) => JSON.parse(value))
  @IsArray()
  // @ApiOverrideProperty({ required: false })
  sorting?: Record<string, string>[];
}
