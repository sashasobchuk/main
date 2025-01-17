import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.API_PORT ?? 5000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  SwaggerModule.setup('api/v1/swagger', app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT},`);
  });
}

bootstrap();
