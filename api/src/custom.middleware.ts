import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Middleware`);

    /** Переважно для логування, применяєця перед кожним запитом, перед @Get в контролерах*/
    next();
  }
}
