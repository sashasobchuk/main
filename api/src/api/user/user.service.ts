import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, EntityManager, In } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';

import { Role, User } from '../../entities';
import { RegisterDto, UpdateUserDto, UserDto } from '../../dto';

@Injectable()
export class UserService {
  private readonly entityManager: EntityManager;

  constructor(private readonly dataSource: DataSource) {
    this.entityManager = this.dataSource.createEntityManager();
  }

  async getUser(id: number) {
    const user = await this.entityManager.findOneBy(User, { id });
    if (!user) {
      throw new NotFoundException('USER_WITH_ID_NOT_FOUND');
    }

    return user;
  }

  async getUsers(q?: string) {
    const queryBuilder = this.entityManager.createQueryBuilder(User, 'user');
    if (q) {
      queryBuilder.where('user.username LIKE :q OR user.email LIKE :q', {
        q: `%${q}%`,
      });
    }

    return queryBuilder.getMany();
  }

  async createNewUser(userCandidate: RegisterDto) {
    // Перевірка та валідація користувача
    await this.validateUserRegistration(userCandidate);

    // Хешування пароля
    const passwordDigest = await this.hashUserPassword(userCandidate.password);

    // Створення нового користувача
    const user = this.entityManager.create(User, {
      ...userCandidate,
      passwordDigest,
    });

    // Збереження нового користувача в базі даних
    await this.entityManager.save(user);

    // Повернення DTO користувача з виключенням зайвих значень
    return plainToInstance(UserDto, user, { excludeExtraneousValues: true });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.entityManager.findOneBy(User, { id });
    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    await this.entityManager
      .transaction(async (manager) => {
        const { roles: rolesIds, ...userData } = updateUserDto;
        await manager.update(User, { id }, userData);

        if (updateUserDto.roles.length) {
          user.roles = await manager.find(Role, {
            where: { id: In(rolesIds) },
          });
          await manager.save(user);
        }
      })
      .catch((error: Error) => {
        console.error(error);
        throw new InternalServerErrorException('An unexpected error occurred');
      });

    return this.entityManager.findOne(User, {
      where: { id },
      relations: ['roles'],
    });
  }

  async deleteUser(id: number) {
    const user = await this.entityManager.findOne(User, {
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    await this.entityManager.delete(User, { id });
  }

  async isEmailAlreadyExists(email: string) {
    const user = await this.entityManager.findOneBy(User, { email });

    return !!user;
  }

  async getUserByEmail(email: string) {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .select(['user', 'user.passwordDigest'])
      .where('user.email = :email', { email })
      .getOne();
  }

  async hashUserPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compareUserPassword(
    password: string,
    passwordDigest: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordDigest);
  }

  async validateUserRegistration(userCandidate: RegisterDto): Promise<void> {
    const isEmailExists = await this.isEmailAlreadyExists(userCandidate.email);
    if (isEmailExists) {
      throw new BadRequestException('USER_WITH_THIS_EMAIL_ALREADY_EXISTS');
    }
  }
}
