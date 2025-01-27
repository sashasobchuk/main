//перевірка чи число якщо ні то помилка

import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    console.log(`pipe`);
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('validation failed, not number');
    }

    return val;
  }
}
