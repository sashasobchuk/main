import { Test, TestingModule } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';
import { AuthGuard } from '../custom.guard'
// import { mockFlowersService } from './flowers.service'
import { LogginInterceptor } from '../interceptor'
import { mockFlowersService } from './flowers.mock'

// jest.mock('../auth/auth.module', () => ({
//   AuthModule: {
//     forRoot: jest.fn().mockReturnValue({
//       provide: 'AUTH_SERVICE',
//       useValue: {},
//     }),
//   },
// }));


describe('FlowersController', () => {
  let controller: FlowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [
        {
          provide: FlowersService,
          useValue: mockFlowersService,
        },
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true),
      })
      .overrideInterceptor(LogginInterceptor)
      .useValue({
        intercept: jest.fn().mockImplementation((context, next) => next.handle()),
      })
      .compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return findAll value', async () => {
    expect(await controller.findAll(1)).toEqual(
      [`This action returns all flowers`]
    )
  })

  it(`should return a list of flowers`, async () => {
    expect(await controller.findOne('1')).toEqual(
      `This action returns a #${1} flower`
    )
  })

});
