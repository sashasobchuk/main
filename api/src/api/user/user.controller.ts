import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';
import { RegisterDto, UpdateUserDto, UserDto } from '@root/dto';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../../entities';
// import { UserDto } from '@root/dto'

@UseGuards(AuthGuard)
@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //api
  @Get()
  //swagger
  @ApiOperation({ summary: 'Retrieve a list of users' })
  @ApiQuery({
    name: 'q',
    required: false,
    description: 'Query string for searching users',
    type: String,
    example: 'admin',
  })
  @ApiOkResponse({
    type: [UserDto],
  })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async getUsers(@Query('q') q?: string) {
    return this.userService.getUsers(q);
  }

  //api
  @Get(':id')
  //swagger
  @ApiOperation({ summary: 'Retrieve a single user by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
  })
  @ApiOkResponse({
    type: UserDto,
  })
  @ApiNotFoundResponse({
    description: 'user not found',
  })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  //api
  @Post('create')
  //swagger
  @ApiOperation({ summary: 'create a single user ' })
  @ApiCreatedResponse({
    type: UserDto,
  })
  @ApiBody({
    type: RegisterDto,
  })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async createUser(@Body() user: RegisterDto) {
    return this.userService.createNewUser(user);
  }

  //api
  @Put(':id')
  //swagger
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the user to update',
    required: true,
    type: Number,
    example: 1,
  })
  @ApiBody({
    description: 'User data to update',
    type: UserDto,
  })
  @ApiOkResponse({
    description: 'User has been successfully updated',
    type: User, // Replace with your actual User entity or DTO
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.updateUser(id, updateUserDto);
  }

  //api
  @Delete(':id')
  //swagger
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the user to be deleted',
    type: Number,
  })
  @ApiOkResponse({
    description: 'The user has been successfully deleted',
  })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
}
