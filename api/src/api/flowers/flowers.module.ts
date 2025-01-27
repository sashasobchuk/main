import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { AuthModule } from '../auth/auth.module';
// https://www.youtube.com/watch?v=gqC0IZVAlsk
@Module({
  imports: [AuthModule],
  controllers: [FlowersController],
  providers: [FlowersService],
})
export class FlowersModule {}
