import { Module } from '@nestjs/common';
import getTypeOrmModule from './config/get-typeorm-config';

// import getTypeOrmModule from './configs/get-typeorm-config';

@Module({
  imports: [getTypeOrmModule()],
})
export class EntitiesModule {}
