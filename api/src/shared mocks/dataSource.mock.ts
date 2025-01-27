import { DataSource } from 'typeorm';

export const mockDataSource = {
  initialize: jest.fn().mockResolvedValue(undefined),
  destroy: jest.fn().mockResolvedValue(undefined),
  manager: {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
    query: jest.fn(),
    getRepository: jest.fn(),
    update: jest.fn(),
    updateOne: jest.fn(),
    deleteOne: jest.fn(),
    updateMany: jest.fn(),
    deleteMany: jest.fn(),

  },
};
