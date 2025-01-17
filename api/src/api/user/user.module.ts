import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EntitiesModule } from '../../entities/entities.module';
import { AuthGuard } from '../auth/auth.guard';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../../dto/utils/ExceptionFilter';

@Module({
  imports: [forwardRef(() => AuthModule), EntitiesModule],
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
export class UserModule {}
