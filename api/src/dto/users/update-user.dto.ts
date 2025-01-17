import { CreateUserDto } from './create-user.dto';
import { ApiTags, PartialType } from '@nestjs/swagger';

@ApiTags('UpdateUserDto')
export class UpdateUserDto extends PartialType(CreateUserDto) {}
