
jest.mock('./auth.module', () => ({
  AuthModule: {
    forRoot: jest.fn().mockReturnValue({
      provide: 'AUTH_SERVICE',
      useValue: {},
    }),
  },
}));
