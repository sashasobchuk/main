import { UserDto } from '../../dto'
import { Module } from '@nestjs/common'


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class MockAuthModule {}



export const mockAuthService = {
  // validateUser: jest.fn().mockResolvedValue(true),
  // login: jest.fn().mockResolvedValue({ token: 'mocked-token' }),
  register: jest.fn().mockImplementation((token: string, user: UserDto) => {
    return {token: '', user: {  }};
  }),
  login:jest.fn().mockImplementation((token: string, user: UserDto) => {
    return {token: '', user: {  }};
  })
};


export class MockAuthGuard {
  canActivate() {
    return true;
  }
}
