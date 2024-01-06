import { Inject, Injectable } from '@nestjs/common';

import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserCreate {
  constructor(
    @Inject(UserInfrastructure) private readonly repository: UserRepository,
  ) {}

  async execute(user: User) {
    const userInserted = await this.repository.save(user);
    return userInserted;
  }
}
