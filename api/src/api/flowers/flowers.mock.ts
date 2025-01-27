// import { CreateFlowerDto } from './dto/create-flower.dto'
// import { UpdateFlowerDto } from './dto/update-flower.dto'

export const mockFlowersService = {
  create: jest.fn().mockImplementation((createFlowerDto: any) => 'This action adds a new flower'),
  findAll: jest.fn().mockReturnValue([`This action returns all flowers`]),
  findOne: jest.fn().mockImplementation((id: number) => `This action returns a #${id} flower`),
  update: jest.fn().mockImplementation((id: number, updateFlowerDto: any) => `This action updates a #${id} flower`),
  remove: jest.fn().mockImplementation((id: number) => `This action removes a #${id} flower`),
};

