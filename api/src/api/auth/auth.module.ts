import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { EntitiesModule } from '../../entities/entities.module';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret:
        process.env.JWT_SECRET || 'SECRET_KEY_7827393273247234934323423212',
      signOptions: {
        expiresIn: '24h',
        algorithm: 'HS256',
      },
    }),

    forwardRef(() => UserModule),
    EntitiesModule,
    UserModule,
    JwtModule,
  ],
  controllers: [AuthController],
  providers: [AuthGuard, AuthService, UserService],
  exports: [AuthGuard, AuthService, JwtModule],
})
export class AuthModule {}
