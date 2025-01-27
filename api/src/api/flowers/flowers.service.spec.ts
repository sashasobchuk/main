import { Test, TestingModule } from '@nestjs/testing';
import { FlowersService } from './flowers.service'
import { AuthGuard } from '../custom.guard'
import { LogginInterceptor } from '../interceptor'
import { mockFlowersService } from './flowers.mock'
// https://www.youtube.com/watch?v=gqC0IZVAlsk
describe('FlowersService', () => {
  let service: FlowersService;

  //todo тут треба мокати не service як в controllers а typeorm запити в базу
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // controllers: [],
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

    service = module.get<FlowersService>(FlowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });



});





