import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
@ApiTags('CountRolesDto')
export class CountRolesDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  q?: string;
}
