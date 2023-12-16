import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';

export class UserInfrastructure implements UserRepository {
  save(user: User): Promise<void> {
    const userEntity = UserDto.fromDomainToData(user) as UserEntity;

    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findByRefreshToken(refreshToken: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  listByPage(page: number, pageSize: number): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
