import { GetTableDefaultDto } from '../utils';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('GetRolesDto')
export class GetRolesDto extends GetTableDefaultDto {}
