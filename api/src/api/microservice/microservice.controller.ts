import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { MicroserviceService } from './microservice.service';
// import { CreateMicroserviceDto } from './dto/create-microservice.dto';
// import { UpdateMicroserviceDto } from './dto/update-microservice.dto';

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @EventPattern('message')
  handleMessage(message: string) {
    return this.microserviceService.handleMessage(message);
  }

  @MessagePattern('createMicroservice')
  create(@Payload() createMicroserviceDto: any) {
    return this.microserviceService.create(createMicroserviceDto);
  }

  @MessagePattern('findAllMicroservice')
  findAll() {
    return this.microserviceService.findAll();
  }

  @MessagePattern('findOneMicroservice')
  findOne(@Payload() id: number) {
    return this.microserviceService.findOne(id);
  }

  @MessagePattern('updateMicroservice')
  update(@Payload() updateMicroserviceDto: any) {
    return this.microserviceService.update(
      updateMicroserviceDto.id,
      updateMicroserviceDto,
    );
  }

  @MessagePattern('removeMicroservice')
  remove(@Payload() id: number) {
    return this.microserviceService.remove(id);
  }
}
