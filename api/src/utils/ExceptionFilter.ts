import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.status || 500;

    console.error(exception); // Логуємо помилку для діагностики

    response.status(status).json({
      statusCode: status,
      message: exception.message || 'Internal server error',
      error: exception.name || 'Unknown Error',
    });
  }
}
