export const mockClientProxy = {
  emit: jest.fn().mockImplementation((event: string, message: any) => {
    console.log(`Event: ${event}, Message: ${message}`);
  }),
};

export const mockAppService = {
  client: mockClientProxy,
  sendMessage: jest.fn().mockImplementation(function () {
    this.client.emit('message', 'Hello World');
  }),
};
