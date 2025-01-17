import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  SerializeOptions,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, UserDto } from '../../dto';
import { UserService } from '../user/user.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  //api
  @Post('register')
  //swagger
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({
    type: typeof { token: String, user: UserDto },
  })
  @ApiBody({ type: RegisterDto })
  @ApiBadRequestResponse({ example: 'USER_WITH_THIS_EMAIL_ALREADY_EXISTS' })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async register(@Body() user: RegisterDto) {
    await this.userService.validateUserRegistration(user);

    return await this.authService.register(user);
  }

  //api
  @Post('login')
  //swagger
  @ApiOperation({ summary: 'User login' })
  @ApiCreatedResponse({
    type: LoginDto,
  })
  @ApiBody({
    description: 'User login credentials',
    type: LoginDto,
  })
  @ApiResponse({ status: 201, type: typeof { token: String, user: UserDto } })
  //validate request
  @UsePipes(new ValidationPipe({ transform: true }))
  //transform response
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ excludeExtraneousValues: true })
  async login(@Body() { email, password }: LoginDto) {
    return await this.authService.login(email, password);
  }
}
