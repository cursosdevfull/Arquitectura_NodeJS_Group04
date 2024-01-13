import { Inject, Injectable } from '@nestjs/common';

import { UserRepository } from '../domain/repositories/user.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { UserResponseDto } from './dtos/user-response.dto';

@Injectable()
export class UserList {
  constructor(
    @Inject(UserInfrastructure) private readonly repository: UserRepository,
  ) {}

  async execute() {
    const usersInserted = await this.repository.list();
    const response = UserResponseDto.fromDomainToResponse(usersInserted);
    return response;
  }
}
