import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as entities from '../index';
import { NamingStrategy } from './naming-strategy';

async function getTypeOrmModule(): Promise<DynamicModule> {
  const PGPASSWORD = process.env.PGPASSWORD;
  // debugger;
  return TypeOrmModule.forRoot({
    type: 'postgres',
    entities: Object.values(entities),
    synchronize: true,
    namingStrategy: new NamingStrategy(),
    password: PGPASSWORD,
    logging: false,
  });
}

export default getTypeOrmModule;
