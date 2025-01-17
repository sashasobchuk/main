import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { plainToInstance } from 'class-transformer';
import { RegisterDto, UserDto } from '../../dto';

interface Payload {
  id: number;
  username: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async register(userCandidate: RegisterDto) {
    const secret = process.env.JWT_SECRET;

    const user = await this.userService.createNewUser(userCandidate);

    const { id, username, email } = user;

    const payload: Payload = {
      id,
      username,
      email,
    };

    const jwtToken = await this.jwtService.signAsync(payload, {
      secret,
    });

    return {
      token: 'Bearer ' + jwtToken,
      user,
    };
  }

  async login(email: string, password: string) {
    const secret = process.env.JWT_SECRET;

    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new BadRequestException('USER_NOT_FOUND');
    }

    const isPasswordValid = await this.userService.compareUserPassword(
      password,
      user.passwordDigest,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('INVALID_PASSWORD');
    }

    const { id, username } = user;

    const payload: Payload = {
      id,
      username,
      email,
    };

    const jwtToken = await this.jwtService.signAsync(payload, {
      secret,
    });

    return {
      token: 'Bearer ' + jwtToken,
      user: plainToInstance(UserDto, user, {
        excludeExtraneousValues: true,
      }),
    };
  }
}
