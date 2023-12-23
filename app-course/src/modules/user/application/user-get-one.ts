import { Inject, Injectable } from '@nestjs/common';

import { UserRepository } from '../domain/repositories/user.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserGetOne {
  constructor(
    @Inject(UserInfrastructure) private readonly repository: UserRepository,
  ) {}

  async execute(id: string) {
    const userFound = await this.repository.findById(id);
    //const response = UserResponseDto.fromDomainToResponse(userFound);
    return userFound;
  }
}
