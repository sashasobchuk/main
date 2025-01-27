import { DynamicModule, Module } from '@nestjs/common'
import { FlowersModule } from './flowers.module'

// для декомпозиції коли преба щось перевикористовувати

@Module({})
export class Flower {
  static forRoot(options: FlowersModule):DynamicModule {
    return {
      module: FlowersModule,
      providers: [{
        provide: "OPTIONS",
        useValue: options
      }]
    }
  }
}




