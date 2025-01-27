import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

const PORT = process.env.API_PORT ?? 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.
  // createMicroservice<NestMicroserviceOptions>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.enableCors({
    origin: process.env.FRONT_TEMPORAL_HOST,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const options = new DocumentBuilder()
    .setTitle('Main')
    .setVersion('0.0.1')
    .addCookieAuth('session', {
      type: 'http',
      in: 'Header',
      scheme: 'Bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/s1/swagger', app, document);
  console.log(111111, process.env.VERSION);
  app.setGlobalPrefix(process.env.VERSION || 'v0');

  await app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT},`);
  });





  const microserviceApp =
    await NestFactory.createMicroservice(AppModule, {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 8877,
      },
    });

  await microserviceApp.listen();
  console.log(`Microservice was started`)

  // const microserviceApp =
  //   await NestFactory.createMicroservice<NestMicroserviceOptions>(AppModule, {
  //     options:{
  //       host:'localhost',
  //       port:8877
  //     }
  //   })
}

bootstrap();
