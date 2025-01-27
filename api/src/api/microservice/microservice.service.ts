import { Injectable } from '@nestjs/common';
// import { CreateMicroserviceDto } from './dto/create-microservice.dto';
// import { UpdateMicroserviceDto } from './dto/update-microservice.dto';

@Injectable()
export class MicroserviceService {
  handleMessage(message: string) {
    console.log(message);
    return `Return microservice: ${message}`;
  }
  create(createMicroserviceDto:any) {
    return 'This action adds a new microservice';
  }

  findAll() {
    return `This action returns all microservice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} microservice`;
  }

  update(id: number, updateMicroserviceDto:any) {
    return `This action updates a #${id} microservice`;
  }

  remove(id: number) {
    return `This action removes a #${id} microservice`;
  }
}
