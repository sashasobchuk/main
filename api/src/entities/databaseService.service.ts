import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService  {
  // constructor(private readonly dataSource: DataSource) {}
  //
  // async onModuleInit() {
  //   try {
  //     Перевірка з'єднання
      // const isConnected = this.dataSource.isInitialized;
      // if (isConnected) {
      //   console.log('_______Connected to the database');
      // } else {
      //   console.log('_______Failed to connect to the database');
      // }
    // } catch (error) {
    //   console.error('_______Database connection failed', error);
    // }
  // }
}
