import { Module } from '@nestjs/common';
import getTypeOrmModule from './config/get-typeorm-config';
import { TypeOrmModule } from '@nestjs/typeorm'
import * as entities from './index'

// import getTypeOrmModule from './configs/get-typeorm-config';

@Module({
  imports: [
    getTypeOrmModule(),
    // TypeOrmModule.forFeature([]), // якщо потрібно додати конкретні entities
    TypeOrmModule.forFeature(Array.from(Object.values(entities))), // якщо потрібно додати конкретні entities

  ],
})
export class EntitiesModule {}
