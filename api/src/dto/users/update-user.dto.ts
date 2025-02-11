import { CreateUserDto } from './create-user.dto';
import { ApiTags, PartialType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
@ApiTags('UpdateUserDto')
export class UpdateUserDto extends PartialType(CreateUserDto) {}
