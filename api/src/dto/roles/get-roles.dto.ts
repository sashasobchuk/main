import { GetTableDefaultDto } from '../utils';
import { ApiTags } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
@ApiTags('GetRolesDto')
export class GetRolesDto extends GetTableDefaultDto {}
