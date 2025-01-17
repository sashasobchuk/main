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
import { ApiProperty } from '@nestjs/swagger';

export class GetTableDefaultDto {
  @Expose()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ required: false })
  offset?: number;

  @Expose()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  @ApiProperty({ required: false })
  limit?: number;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  q?: string;

  @Expose()
  @IsOptional()
  @Transform(({ value }) => JSON.parse(value))
  @IsArray()
  @ApiProperty({ required: false })
  sorting?: Record<string, string>[];
}
