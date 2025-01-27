import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  Query,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { LogginInterceptor } from '../../interceptor';
import { AuthGuard } from '../../custom.guard';
import { CustomIntPipe } from '../../custom.pipe';

@Controller('flowers')
@UseInterceptors(LogginInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Post()
  create(@Body() createFlowerDto: CreateFlowerDto) {
    return this.flowersService.create(createFlowerDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', CustomIntPipe) pageNumber: number) {
    console.log(`pageNumber${pageNumber}`);
    return this.flowersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlowerDto: UpdateFlowerDto) {
    return this.flowersService.update(+id, updateFlowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowersService.remove(+id);
  }

  // @Get('new_order')
  // newOrder() {
  //   return '';
  // }
}
