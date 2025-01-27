import { Module } from '@nestjs/common';
import getTypeOrmModule from './config/get-typeorm-config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'

// import getTypeOrmModule from './configs/get-typeorm-config';

@Module({
  imports: [getTypeOrmModule(),/*DataSource*/],
  providers: [],
  exports:[],
})
export class EntitiesModule {}
