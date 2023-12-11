import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';

export class UserCreate {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(user: User) {
    const userInserted = await this.repository.save(user);
    return userInserted;
  }
}
