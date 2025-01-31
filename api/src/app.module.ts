import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from './entities/entities.module'
import * as entities from './entities'

@Module({
  imports: [
    TypeOrmModule.forFeature(Array.from(Object.values(entities))), // якщо потрібно додати конкретні entities
    ConfigModule.forRoot({
      envFilePath: `../.env`,
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    EntitiesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
