import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { EntitiesModule } from '../../entities/entities.module'
import { AuthGuard } from '../auth/auth.guard'
import { AuthModule } from '../auth/auth.module'
import { forwardRef } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
// import { AllExceptionsFilter } from '../../dto/utils/ExceptionFilter'
import * as entities from '../../entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AllExceptionsFilter } from '../../utils/ExceptionFilter'
// import { AllExceptionsFilter } from '@root/dto/dist'

@Module({
  imports: [
    TypeOrmModule.forFeature(Array.from(Object.values(entities))), // якщо потрібно додати конкретні entities

    forwardRef(() => AuthModule),
    EntitiesModule
  ],
  controllers: [UserController],
  providers: [
    UserService,
    AuthGuard,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  exports: [UserService],
})
export class UserModule {
}
