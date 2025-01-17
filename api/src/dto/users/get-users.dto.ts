import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUsersDto {
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
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ required: false })
  id?: number;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  username?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  email?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  q?: string;
}
