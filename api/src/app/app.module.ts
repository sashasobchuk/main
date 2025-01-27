import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from '../api/auth/auth.module';
import { UserModule } from '../api/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from '../chat/chat.module';
import { CustomMiddleware } from '../custom.middleware';
import { FlowersModule } from '../api/flowers/flowers.module';
import { MicroserviceModule } from '../api/microservice/microservice.module';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { WebsocketGateway } from '../websocket/websocket.gateway'
import { EntitiesModule } from '../entities/entities.module'

@Module({
  imports: [
    EntitiesModule,
    ConfigModule.forRoot({
      envFilePath: `../.env`,
      isGlobal: true,

    }),
    AuthModule,
    // UserModule,
    // FlowersModule,
    ChatModule,
    MicroserviceModule,

    ClientsModule.register([{
      name:'ORDER_SERVICE',// назва мікросервісу,
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 8877,
      },
    }])
  ],
  controllers: [AppController],
  providers: [AppService,WebsocketGateway],
})


export class AppModule {}
/*
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CustomMiddleware).forRoutes('flowers'); //буде примінятись лише для flowers модуля
  }
}
*/
