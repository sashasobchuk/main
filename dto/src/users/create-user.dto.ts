import { Expose, Transform } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { CustomRequired } from '../utils/CustomRequired';
// import { ApiOverrideProperty } from '../utils'

export class CreateUserDto {
  @Expose()
  @IsString()
  @CustomRequired()
  //@ApiOverrideProperty()
  username: string;

  @Expose()
  @IsString()
  @CustomRequired()
  //@ApiOverrideProperty()
  firstName: string;

  @Expose()
  @IsString()
  @CustomRequired()
  //@ApiOverrideProperty()
  lastName: string;

  @Expose()
  @IsString()
  @CustomRequired()
  //@ApiOverrideProperty()
  email: string;

  @Expose()
  @IsArray()
  // @ApiOverrideProperty({ type: [Number], default: [] })
  @Transform(({ value }) => {
    return value || [];
  })
  roles: number[];
}
