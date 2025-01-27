import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
// import { isLogLevelEnabled } from '@nestjs/common/services/utils';

@Injectable()
export class LogginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log(`intercept called with context: ${JSON.stringify(context)}`);
    console.log(`interceptor`);
    return next.handle().pipe(tap(() => console.log(`interceptor after...`)));
  }
}
